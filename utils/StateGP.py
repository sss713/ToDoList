from aiogram.fsm.state import StatesGroup, State

class StateStatus(StatesGroup):
    start_place = State()

    get_login_reg = State()
    get_password_reg = State()
    get_nickname_reg = State()

    get_login = State()
    get_password = State()

    after_auth = State()
    befor_auth = State()

    profile = State()

    add_task_name = State()
    add_task_description = State()
    add_task_date = State()
    add_task_status = State()
    #
    # profile = State()
    # list_of_task = State()
