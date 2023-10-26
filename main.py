import asyncio
import datetime
import logging
import sys
import time
from os import getenv

from aiogram.fsm import state
from aiogram import F
from settings.config import dp, TOKEN
from utils import StateGP
from utils.StateGP import StateStatus
from utils.model import Model, User, ToDoTask, ND
from aiogram.fsm.context import FSMContext
from aiogram.types import KeyboardButton, ReplyKeyboardMarkup, ReplyKeyboardRemove, CallbackQuery
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton
from aiogram.filters import Command

from aiogram import Bot, Dispatcher, Router, types
from aiogram.enums import ParseMode
from aiogram.filters import CommandStart
from aiogram.types import Message
from aiogram.utils.markdown import hbold

from aiogram.types import KeyboardButton, ReplyKeyboardMarkup

logging.basicConfig(level=logging.INFO)


async def send_daily_task_notifications(user_chat_id):
    today = datetime.datetime.now().strftime('%Y-%m-%d')
    # formatted_date = datetime.datetime(2023, 12, 31)
    # today = formatted_date.strftime('%Y-%m-%d')

    session = Model().session
    query = session.query(ToDoTask.TDtask_name, ToDoTask.TDtask_description, ToDoTask.TDtask_deadline). \
        join(ND, ToDoTask.TDtask_id == ND.TDtask_id). \
        join(User, ND.user_id == User.user_id). \
        filter(ToDoTask.TDtask_deadline == today). \
        filter(User.telegram_id == user_chat_id).all()
    if query:
        task_lst = [f'{task[0]} - {task[1]} - {task[2]}' for task in query]
        task_str = '\n'.join(task_lst)
        message_text = f'Вам нужно выполнить следующие задачи на сегодня:\n{task_str}'
        await bot.send_message(user_chat_id, message_text)

    session.close()


async def background_task(chat_id):
    user_chat_id = chat_id
    while True:
        await send_daily_task_notifications(user_chat_id)
        await asyncio.sleep(200)


@dp.message(CommandStart())
async def start(message: Message):
    await message.answer('Этот бот создан для просмотра ваших задач и уведомления! \n '
                         'Чтобы войти вы должны быть зарегистрированы на сайте - https://savitto.ru/ \n'
                         'После регистрации на сайте пишите /login\n'
                         'Тестовые данные: \n'
                         'Login: admin\n'
                         'Password: 0000')

@dp.message(Command("login"))
async def start_to_login(message: Message, state: FSMContext):
    await message.answer(f'{message.from_user.full_name}, введите логин: ')
    await state.set_state(StateStatus.get_login)


# @dp.message()
# async def reject_provide(message: Message, state: FSMContext):
#     state_status = await state.get_state()
#     if state_status != StateStatus.profile:
#         await message.answer('Вам нужно авторизоваться для использования функционала бота')


@dp.message(StateStatus.profile, lambda message: message.text == "Свои задачи")
async def test(message: Message, state: FSMContext):
    session = Model().session
    # data = await state.get_data()
    query = session.query(ToDoTask.TDtask_id, ToDoTask.TDtask_name, ToDoTask.TDtask_description,
                          ToDoTask.TDtask_deadline). \
        join(ND, ToDoTask.TDtask_id == ND.TDtask_id). \
        join(User, ND.user_id == User.user_id). \
        filter(User.Login == 'admin').all()

    for task_object in query:
        id_nickname = task_object[0]
        select_text = InlineKeyboardMarkup(inline_keyboard=[
            [InlineKeyboardButton(text='Удалить', callback_data=f'delete_task {task_object[0]}')]
        ])

        await message.answer(f'{task_object[1]}', reply_markup=select_text)


@dp.callback_query(lambda cal: F.data == 'delete_task')
async def some_test(callback: CallbackQuery):
    session = Model().session
    parametr = callback.data.split()
    id_task = parametr[1]
    task_to_delete = session.query(ToDoTask).filter(ToDoTask.TDtask_id == id_task).first()
    nd_to_delete = session.query(ND).filter(ND.TDtask_id == id_task).first()

    if task_to_delete:
        session.delete(task_to_delete)
        session.delete(nd_to_delete)
        session.commit()
        await callback.answer('Удалено')
        await callback.message.delete()
    else:
        await callback.answer('Ошибка удаления задачи')




@dp.message(StateStatus.get_login)
async def on_start(message: types.Message, state: FSMContext):
    session = Model().session
    login_user = message.text
    await message.answer('Введите пароль')
    await state.update_data(login_FSM=login_user)
    await state.set_state(StateStatus.get_password)



@dp.message(StateStatus.get_password)
async def get_password(message: types.Message, state: FSMContext):
    session = Model().session
    password = message.text
    data = await state.get_data()
    true_profile = session.query(User.user_id).filter(User.Login == data['login_FSM']).filter(User.Password == password).first()

    if true_profile:
        nickname = session.query(User.Nickname).filter(User.Login == data['login_FSM']).first()

        await message.answer(f'Вход успешен, {nickname[0]}!')

        query_user = session.query(User).filter(User.Login == data['login_FSM']).first()

        if query_user is not None:
            query_user.telegram_id = message.chat.id
            session.commit()

        session.close()
        # await send_daily_task_notifications(message.from_user.id)
        # await send_notifications(message.from_user.id)
        await state.set_state(StateStatus.after_auth)
        await menu(message, state)
        await background_task(message.chat.id)

    else:
        await message.answer('Ошибка авторизации, неверный логин или пароль')
        await state.set_state(StateStatus.get_login)
    session.close()


@dp.message(StateStatus.after_auth)
async def menu(message: Message, state: FSMContext):
    kb = [
        [KeyboardButton(text='Добавить задачу')],
        [KeyboardButton(text='Свои задачи')],
        [KeyboardButton(text='Отказаться от уведомлений')],
        [KeyboardButton(text='Включить уведомления')]
    ]
    keyboard = ReplyKeyboardMarkup(keyboard=kb)
    await message.answer('Выберите действие: ', reply_markup=keyboard)
    await state.set_state(StateStatus.profile)


@dp.message(StateStatus.profile, lambda message: message.text == "Отказаться от уведомлений")
async def remove_notifications(message: Message, state: FSMContext):
    session = Model().session
    data = await state.get_data()
    session.query(User).filter(User.Login == data['login_FSM']).update({'telegram_id': None})
    session.commit()
    session.close()
    await message.answer('Уведомления отключены')
    await state.set_state(StateStatus.after_auth)
    await menu(message, state)


@dp.message(StateStatus.profile, lambda message: message.text == "Включить уведомления")
async def add_notifications(message: Message, state: FSMContext):
    session = Model().session
    data = await state.get_data()
    session.query(User).filter(User.Login == data['login_FSM']).update({'telegram_id': message.chat.id})
    session.commit()
    session.close()
    await message.answer('Уведомления включены')
    await state.set_state(StateStatus.after_auth)
    await menu(message, state)


# @dp.message(StateStatus.profile, lambda message: message.text == "Свои задачи")
# async def show_tasks(message: Message, state: FSMContext):
#     session = Model().session
#     data = await state.get_data()
#     query = session.query(ToDoTask.TDtask_name, ToDoTask.TDtask_description, ToDoTask.TDtask_deadline). \
#         join(ND, ToDoTask.TDtask_id == ND.TDtask_id). \
#         join(User, ND.user_id == User.user_id). \
#         filter(User.Login == data['login_FSM']).all()
#     message_text = "Ваши задачи:\n"
#     for idx, task in enumerate(query, start=1):
#         task_name, task_description, task_deadline = task
#         message_text += f"{idx}. Название: {task_name}\n   Описание: {task_description}\n   Дедлайн: {task_deadline}\n"
#
#     await message.answer(f'{message_text}')


@dp.message(StateStatus.profile, lambda message: message.text == "Добавить задачу")
async def add_task(message: Message, state: FSMContext):
    ReplyKeyboardRemove()
    await message.answer('Начнем создание новой задачи! ')
    await message.answer('Задайте название задачи:')
    await state.set_state(StateStatus.add_task_name)


@dp.message(StateStatus.add_task_name)
async def add_task_name_func(message: Message, state: FSMContext):
    task_name = message.text
    len_task_name = len(task_name)
    if len_task_name <= 55:
        await state.update_data(TDtask_name=task_name)
        await message.answer('Задайте описание задачи: ')
        await state.set_state(StateStatus.add_task_description)
    else:
        await message.answer(f'Привышен лимит строки, укажите менее 110 символов(текущий размер строки {len_task_name})')
        await state.set_state(StateStatus.add_task_name)


@dp.message(StateStatus.add_task_description)
async def add_task_description_func(message: Message, state: FSMContext):
    task_description = message.text
    len_task_description = len(task_description)
    if len_task_description <= 240:
        await state.update_data(TDtask_description=task_description)
        await message.answer('Задайте день дедлайна задачи(формат следующий - YYYY.MM.DD): ')
        await state.set_state(StateStatus.add_task_date)
    else:
        await message.answer(f'Привышен лимит строки, укажите менее 240 символов(текущий размер строки {len_task_description})')
        await state.set_state(StateStatus.add_task_description)


@dp.message(StateStatus.add_task_date)
async def add_task_date_func(message: Message, state: FSMContext):
    task_date = message.text
    try:
        datetime.datetime.strptime(task_date, '%Y-%m-%d')
        await state.update_data(TDtask_deadline=task_date)
        await state.set_state(StateStatus.add_task_status)
        await message.answer('Задайте важность данной задачи от 0 до 10')
    except ValueError:
        await message.answer('Пожалуйста введите корректную дату по заданому формату')
        await state.set_state(StateStatus.add_task_date)

@dp.message(StateStatus.add_task_status)
async def add_task_status_func(message: Message, state: FSMContext):
    task_status = message.text
    data = await state.get_data()
    id_user = message.from_user.id
    if 0 <= int(task_status) <= 10:
        if await Model().add_task_to_db(id_user, int(task_status), data) == True:
            await state.set_state(StateStatus.profile)
        else:
            await state.set_state(StateStatus.add_task_status)
            await message.answer('Ошибка добавления')
    else:
        await state.set_state(StateStatus.add_task_status)
        await message.answer('Ошибка много взяли')


async def main() -> None:
    global bot
    bot = Bot(TOKEN, parse_mode=ParseMode.HTML)
    await dp.start_polling(bot)


if __name__ == '__main__':
    # Model().create_table()
    # Model().init_table()
    logging.basicConfig(level=logging.INFO, stream=sys.stdout)
    asyncio.run(main())
