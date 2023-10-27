import json

import aiohttp


class Api_query:
    @staticmethod
    async def request_1_POST(endpoint, data):
        """здесь брать запросы где есть json файл"""
        async with aiohttp.ClientSession() as session:
            headers = {'Content-Type': 'application/json'}
            async with session.post(f'http://localhost:5000/api/{endpoint}', data=json.dumps(data), headers=headers) as response:
                return await response.text()

    @staticmethod
    async def request_2_GET(endpoint):
        """здесь нужно брать запросы те, в которых нету json файла"""
        async with aiohttp.ClientSession() as session:
            headers = {'Content-Type': 'application/json'}

            async with session.get(f'http://localhost:5000/api/{endpoint}',
                                   headers=headers) as response:
                return await response.text()
    @staticmethod
    async def get_id_user(data):
        return await Api_query.request_1_POST('authorization', data)

    @staticmethod
    async def post_id_telegram(data):
        return await Api_query.request_1_POST('tgauthorization', data)

    @staticmethod
    async def get_tasks_by_id(data):
        return await Api_query.request_2_GET(f'posts/all?userId={data["db_id_user"]}')

    @staticmethod
    async def delete_data_DELETE(data, id_task):
        async with aiohttp.ClientSession() as session:
            headers = {'Content-Type': 'application/json'}
            async with session.delete(f'http://localhost:5000/api/posts/del?taskId={id_task}&userId={data["db_id_user"]}', headers=headers) as response:
                return await response.text()

    @staticmethod
    async def turnoff_or_turn_alert_POST(data, id_tg_user, enable_alert=""):
        data["telegram_id"] = id_tg_user
        data["enable_alerts"] = enable_alert
        return await Api_query.request_1_POST(f'tgalerts', data)

    @staticmethod
    async def add_task_POST(data, id_user):
        data["TDtask_completed"] = False
        data["userId"] = id_user
        return await Api_query.request_1_POST('posts', data)

    @staticmethod
    async def reg_POST(data):
        return await Api_query.request_1_POST('registration', data)