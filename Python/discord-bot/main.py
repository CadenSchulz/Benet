import discord
from discord.ext import commands

import os
from config import TOKEN

bot = commands.Bot(command_prefix='-')


def load_cogs():
    for filename in os.listdir('./cogs'):
        if filename.endswith('.py') and filename != '__init__.py':
            bot.load_extension(f'cogs.{filename[:-3]}')


@bot.event
async def on_ready():
    print("Benet bot is ready")

load_cogs()
bot.run(TOKEN)
