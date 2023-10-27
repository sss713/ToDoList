import asyncio
import datetime
import json
import logging
import sys
import time
from os import getenv

from aiogram.fsm import state
from aiogram import F
from settings.config import dp, TOKEN
from utils import StateGP
from utils.API import Api_query
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


async def send_daily_task_notifications(user_chat_id, state):
    today = datetime.datetime.now().strftime('%Y-%m-%d')
    # formatted_date = datetime.datetime(2023, 12, 31)
    # today = formatted_date.strftime('%Y-%m-%d')

    data = await state.get_data()
    query = await Api_query.get_tasks_by_id(data)
    query = json.loads(query)
    task_list = []
    if query.get("rows"):
        for task in query["rows"]:
            received_date = datetime.datetime.strptime(task["tdtask_deadline"], "%Y-%m-%dT%H:%M:%S.%fZ")
            current_date = datetime.datetime.now()
            received_date += datetime.timedelta(hours=3)

            if received_date.date() == current_date.date():
                task_list.append(f"{task.get('tdtask_name')} - {task.get('tdtask_description')} \n Важность: {task.get('tdtask_status')}")

        task_str = '\n'.join(task_list)
        if task_str != '':
            message_text = f'Вам нужно выполнить следующие задачи на сегодня:\n{task_str}'
            await bot.send_message(user_chat_id, message_text)



async def background_task(chat_id, state, data):
    user_chat_id = chat_id
    while True:

        await asyncio.sleep(15)
        responses = await Api_query.turnoff_or_turn_alert_POST(data, chat_id)
        responses = json.loads(responses)
        if responses["user"]["enable_alerts"] is True:
            await send_daily_task_notifications(user_chat_id, state)


@dp.message(CommandStart())
async def start(message: Message, state: FSMContext):
    await message.answer('Этот бот создан для просмотра ваших задач и уведомления! \n '
                         'Чтобы войти вы должны быть зарегистрированы через бота, либо на сайте - https://savitto.ru/ \n'
                         'После регистрации пишите /login\n'
                         'Чтобы перейти на регистрацию пишите /reg\n')
    await state.set_state(StateStatus.start_place)


@dp.message(Command("reg"), StateStatus.start_place)
async def start_reg(message: Message, state: FSMContext):
    await message.answer(
        f'{message.from_user.full_name}, Придумайте логин(Логин должен быть в промежутке от 2 до 19 символов): ')
    await state.set_state(StateStatus.get_login_reg)

@dp.message(StateStatus.get_login_reg)
async def get_login_reg(message: Message, state: FSMContext):
    login_reg = message.text
    if 2 <= len(login_reg) <= 19:
        await message.answer('Введите пароль (Пароль должен быть в промежутке от 7 до 35 символов):')
        await state.update_data(login=login_reg)
        await state.set_state(StateStatus.get_password_reg)
    else:
        await message.answer('Ваш логин слишком длинный или слишком короткий')
        await message.answer(f'{message.from_user.full_name}, введите логин: ')
        await state.set_state(StateStatus.get_login_reg)

@dp.message(StateStatus.get_password_reg)
async def get_password_reg(message: Message, state: FSMContext):
    password_reg = message.text
    if 7 <= len(password_reg) <= 35:
        data = await state.get_data()
        await state.update_data(password=password_reg)
        await message.answer('Введите никнейм:')
        await state.set_state(StateStatus.get_nickname_reg)
    else:
        await message.answer(
            f'Пароль должен быть в промежутке от 8 до 36 символов\nТекущая длина пароля {len(password_reg)}')
        await state.set_state(StateStatus.get_password_reg)

@dp.message(StateStatus.get_nickname_reg)
async def get_nickname_reg(message: Message, state: FSMContext):
    nickname_reg = message.text
    data = await state.get_data()
    if 1 <= len(nickname_reg) <= 19:
        data["nickname"] = nickname_reg
        response = await Api_query.reg_POST(data)
        response = json.loads(response)
        if "message" in response:
            if response["message"] != 'Server error':
                if response["message"] != f'User with login: {data["login"]} already exist':
                    await message.answer(f'Регистрация успешена, {nickname_reg}!')
                    id_user = await Api_query.get_id_user(data)
                    id_user = json.loads(id_user)
                    await state.update_data(db_id_user=id_user["user"]["id"])
                    await start(message, state)
                else:
                    await message.answer('Ошибка регистрации, возможно вы уже создали такой аккаунт')
                    await start(message, state)
            else:
                await message.answer('Ошибка регистрации, возможно вы уже создали такой аккаунт')
                await start(message, state)
        else:
            await message.answer('Ошибка попробуйте другой вариант регистрации или зайдите позже')
            await start(message, state)
@dp.message(Command("login"), StateStatus.start_place)
async def start_to_login(message: Message, state: FSMContext):
    await message.answer(f'{message.from_user.full_name}, введите логин(Логин должен быть в промежутке от 2 до 19 символов): ')
    await state.set_state(StateStatus.get_login)

@dp.message(StateStatus.get_login)
async def on_start(message: types.Message, state: FSMContext):
    login_user = message.text
    if 2 <= len(login_user) <= 19:
        await message.answer('Введите пароль (Пароль должен быть в промежутке от 7 до 35 символов):')
        await state.update_data(login=login_user)
        await state.set_state(StateStatus.get_password)
    else:
        await message.answer('ваш пароль слишком длинный или слишком короткий')
        await message.answer(f'{message.from_user.full_name}, введите логин: ')
        await state.set_state(StateStatus.get_login)

@dp.message(StateStatus.get_password)
async def get_password(message: types.Message, state: FSMContext):
    password = message.text
    if 7 <= len(password) <= 35:
        data = await state.get_data()
        data['password'] = password
        response = await Api_query.get_id_user(data)
        response = json.loads(response)
        if "user" in response:
            nickname = response["user"]["nickname"]

            await message.answer(f'Вход успешен, {nickname}!')
            await state.update_data(db_id_user=response["user"]["id"])
            data["telegramid"] = message.from_user.id
            await Api_query.post_id_telegram(data)

            await send_daily_task_notifications(message.from_user.id, state)
            await state.set_state(StateStatus.after_auth)
            await menu(message, state)
            await background_task(message.chat.id, state, data)

        else:
            await message.answer('Ошибка авторизации, неверный логин или пароль')
            await message.answer('Введите логин еще раз:')
            await state.set_state(StateStatus.get_login)
    else:
        await message.answer(f'Пароль должен быть в промежутке от 8 до 36 символов\nТекущая длина пароля {len(password)}')

@dp.message(StateStatus.profile, lambda message: message.text == "Свои задачи")
async def test(message: Message, state: FSMContext):
    data = await state.get_data()
    query = await Api_query.get_tasks_by_id(data)
    response = json.loads(query)
    if response.get("rows"):
        for task in response["rows"]:
            task_text = f"""{task.get('tdtask_id')}. {task.get('tdtask_name')} \n
                            Описание: {task.get('tdtask_description')} \n
                            Важность {task.get('tdtask_status')} \n
                            Дедлайн: {task.get('tdtask_deadline').split('T')[0]}, 
                            {task.get('tdtask_deadline').split('T')[1].split('.')[0]}"""

            select_text = InlineKeyboardMarkup(inline_keyboard=[
                [InlineKeyboardButton(text='Удалить', callback_data=f'delete_task {task["tdtask_id"]}')]
            ])

            await message.answer(task_text, reply_markup=select_text)
    else:
        await message.answer('Список задач пуст')


@dp.callback_query(lambda cal: F.data == 'delete_task')
async def some_test(callback: CallbackQuery, state: FSMContext):
    parametr = callback.data.split()
    id_task = parametr[1]
    data = await state.get_data()
    task_to_delete = await Api_query.delete_data_DELETE(data, id_task)
    task_to_delete = json.loads(task_to_delete)
    if 'rowCount' in task_to_delete:
        if task_to_delete.get("rowCount") == 1:
            await callback.answer('Удалено')
            await callback.message.delete()
        else:
            await callback.answer('Ошибка нахождения задачи')
    else:
        await callback.answer('Ошибка удаления задачи')


@dp.message(StateStatus.after_auth)
async def menu(message: Message, state: FSMContext):
    # data = await state.get_data()
    # response = Api_query.turnoff_or_turn_alert_POST(data, message.from_user.id)

    kb = [
        [KeyboardButton(text='Добавить задачу')],
        [KeyboardButton(text='Свои задачи')],
        [KeyboardButton(text='Включить/Отключить уведомления')],
    ]
    keyboard = ReplyKeyboardMarkup(keyboard=kb)
    await message.answer('Выберите действие: ', reply_markup=keyboard)
    await state.set_state(StateStatus.profile)


@dp.message(StateStatus.profile, lambda message: message.text == "Включить/Отключить уведомления")
async def remove_notifications(message: Message, state: FSMContext):
    data = await state.get_data()
    responses = await Api_query.turnoff_or_turn_alert_POST(data, message.from_user.id)
    responses = json.loads(responses)
    if "message" not in responses:
        if responses["user"]["enable_alerts"] == True:
            await Api_query.turnoff_or_turn_alert_POST(data, message.from_user.id, enable_alert="false")
            await message.answer('Уведомления отключены')
            await state.set_state(StateStatus.after_auth)
            await menu(message, state)
        elif responses["user"]["enable_alerts"] == False:
            await Api_query.turnoff_or_turn_alert_POST(data, message.from_user.id, enable_alert="true")
            await message.answer('Уведомления включены')
            await state.set_state(StateStatus.after_auth)
            await menu(message, state)
    else:
        await message.answer('Ошибка отлючения уведомлений')


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
    if len_task_name <= 59:
        await state.update_data(TDtask_name=task_name)
        await message.answer('Задайте описание задачи: ')
        await state.set_state(StateStatus.add_task_description)
    else:
        await message.answer(f'Привышен лимит строки, укажите менее 60 символов(текущий размер строки {len_task_name})')
        await state.set_state(StateStatus.add_task_name)


@dp.message(StateStatus.add_task_description)
async def add_task_description_func(message: Message, state: FSMContext):
    task_description = message.text
    len_task_description = len(task_description)
    if len_task_description <= 249:
        await state.update_data(TDtask_description=task_description)
        await message.answer('Задайте день дедлайна задачи(формат следующий - YYYY.MM.DD): ')
        await state.set_state(StateStatus.add_task_date)
    else:
        await message.answer(f'Привышен лимит строки, укажите менее 250 символов(текущий размер строки {len_task_description})')
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
    task_status = int(task_status)
    await state.update_data(TDtask_status=task_status)
    data = await state.get_data()
    if 0 <= int(task_status) <= 10:
        response = await Api_query.add_task_POST(data, data["db_id_user"])
        await message.answer("Успешно добавлена новая задача!")
        await state.set_state(StateStatus.profile)
        await menu(message, state)
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
