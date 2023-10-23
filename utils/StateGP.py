from aiogram.fsm.state import StatesGroup, State

class StateStatus(StatesGroup):

    get_login = State()
    get_password = State()
    after_auth = State()
    befor_auth = State()

    profile = State()
    list_of_task = State()
