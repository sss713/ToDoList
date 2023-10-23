import asyncio
import datetime
import logging
import sys
import time
from os import getenv

from aiogram.fsm import state

from settings.config import dp, TOKEN
from utils import StateGP
from utils.StateGP import StateStatus
from utils.model import Model, User, ToDoTask, ND
from aiogram.fsm.context import FSMContext
from aiogram.types import KeyboardButton, ReplyKeyboardMarkup, ReplyKeyboardRemove

# импорт кнопок(ранний вариант)
# from utils.KeyBoards import KeyBoard



from aiogram import Bot, Dispatcher, Router, types
from aiogram.enums import ParseMode
from aiogram.filters import CommandStart
from aiogram.types import Message
from aiogram.utils.markdown import hbold

from aiogram.types import KeyboardButton, ReplyKeyboardMarkup


# async def send_notifications(user_chat_id):
#     while True:
#         session = Model().session
#         # data_user = session.query(User.Login).filter(User.telegram_id == user_chat_id).first()
#         query = session.query(ToDoTask.TDtask_name, ToDoTask.TDtask_description, ToDoTask.TDtask_deadline). \
#             join(ND, ToDoTask.TDtask_id == ND.TDtask_id). \
#             join(User, ND.user_id == User.user_id). \
#             filter(User.Login == 'admin').all()
#
#         for send in query:
#             date_string = send[2]
#             year, month, day = map(int, date_string.split('-'))
#             now_date = datetime.datetime.now()
#             target_date = datetime.datetime(year, month, day)
#             time_difference = target_date - now_date
#             days = time_difference.days
#
#             await bot.send_message(user_chat_id, f'{send[0]} - {send[1]} - {send[2]}')
#

async def send_daily_task_notifications(user_chat_id):
    # today = datetime.datetime.now().strftime('%Y-%m-%d')
    formatted_date = datetime.datetime(2023, 12, 31)
    today = formatted_date.strftime('%Y-%m-%d')

    session = Model().session
    query = session.query(ToDoTask.TDtask_name, ToDoTask.TDtask_description, ToDoTask.TDtask_deadline). \
        join(ND, ToDoTask.TDtask_id == ND.TDtask_id). \
        join(User, ND.user_id == User.user_id). \
        filter(ToDoTask.TDtask_deadline == today). \
        filter(User.telegram_id == user_chat_id).all()
    if query:
        task_lst = []
        for task in query:
            task_lst.append(f'{task[0]} - {task[1]} - {task[2]}')
        await bot.send_message(user_chat_id, f'Вам нужно выполнить следующие задачи на сегодня: {task_lst}')

    session.close()

async def background_task(chat_id):
    user_chat_id = chat_id
    while True:
        await send_daily_task_notifications(user_chat_id)
        await asyncio.sleep(30)

@dp.message(CommandStart())
async def get_phone(message: Message, state:FSMContext):
    ReplyKeyboardRemove()
    await message.answer(f'{message.from_user.full_name}, введите логин: ')
    await state.set_state(StateStatus.get_login)

@dp.message(StateStatus.get_login)
async def on_start(message: types.Message, state:FSMContext):
    session = Model().session
    login_user = message.text
    true_login = session.query(User.Login).filter(User.Login == login_user).first()
    if true_login:
        await message.answer('Введите пароль')
        await state.update_data(login_FSM=login_user)
        await state.set_state(StateStatus.get_password)
    else:
        await message.answer('Опс, Такого логина нету, попробуйте ввести другой')
        await state.set_state(StateStatus.get_login)

@dp.message(StateStatus.get_password)
async def get_password(message: types.Message, state:FSMContext):
    session = Model().session
    password = message.text
    data = await state.get_data()
    true_login = session.query(User.Password).filter(User.Login == data['login_FSM']).first()

    if true_login[0] == password:
        nickname = session.query(User.Nickname).filter(User.Login == data['login_FSM']).first()

        await message.answer(f'Вход успешен, {nickname[0]}!')

        query_user = session.query(User).filter(User.Login == data['login_FSM']).first()

        if query_user is not None:
            query_user.telegram_id = message.chat.id
            session.commit()

        session.close()
        # await send_daily_task_notifications(message.from_user.id)
        # await send_notifications(message.from_user.id)
        await background_task(12432134)
        await state.set_state(StateStatus.after_auth)
        await menu(message, state)
    else:
        await message.answer('Пароль неверный, попробуйте еще раз вести логин')
        await state.set_state(StateStatus.get_login)
    session.close()

@dp.message(StateStatus.after_auth)
async def menu(message: Message, state:FSMContext):
    kb = [
        [KeyboardButton(text='Свои задачи')],
        [KeyboardButton(text='Профиль')]
    ]
    keyboard = ReplyKeyboardMarkup(keyboard=kb)
    await message.answer('Выберите действие: ', reply_markup=keyboard)


# @dp.message(StateStatus.profile, lambda message: message.text == "Профиль", StateStatus.profile)
# async def profile(message: Message, state:FSMContext):
#     pass

async def main() -> None:
    global bot
    bot = Bot(TOKEN, parse_mode=ParseMode.HTML)
    await dp.start_polling(bot)


if __name__ == '__main__':
    Model().create_table()
    logging.basicConfig(level=logging.INFO, stream=sys.stdout)
    asyncio.run(main())