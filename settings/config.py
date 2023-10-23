import asyncio
import logging
import sys
from os import getenv
from dotenv import load_dotenv
from aiogram import Bot, Dispatcher

load_dotenv()
TOKEN = getenv("TOKEN")

dp = Dispatcher()