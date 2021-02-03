# THIS IS THE MAIN FILE

import discord
from discord.ext import commands

client = commands.Bot(command_prefix = '-')

@client.event
async def on_ready():
    print('Benet Bot is ready.')

client.run('HIDDEN')
