import aiohttp
import json
import asyncio

class Api_query:
    @staticmethod
    async def get_id_user(data):
        async with aiohttp.ClientSession() as session:
            headers = {'Content-Type': 'application/json'}
            async with session.post('http://127.0.0.1:5000/api/authorization', data=json.dumps(data), headers=headers) as response:
                p = 2
                return await response.text()

    @staticmethod
    async def delete_data(data):


async def main():
    response = await Api_query.get_id_user({"login": "some", "password": "123456789"})
    print(response)

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
