import asyncio
import logging
import sys
from os import getenv

from aiogram.fsm import state

from settings.config import dp, TOKEN
from utils import StateGP
from utils.StateGP import StateStatus
from utils.model import Model, User
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
        await state.set_state(StateStatus.after_auth)
    else:
        await message.answer('Пароль неверный, попробуйте еще раз вести логин')
        await state.set_state(StateStatus.get_login)


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
    bot = Bot(TOKEN, parse_mode=ParseMode.HTML)
    await dp.start_polling(bot)

if __name__ == '__main__':
    Model().create_table()
    logging.basicConfig(level=logging.INFO, stream=sys.stdout)
    asyncio.run(main())