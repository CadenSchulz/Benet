import discord
from discord.ext import commands

class Announce(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name='announce', aliases=["a"])
    async def announce(self, ctx, *args):
        for arg in args:
            await ctx.send(arg)


def setup(bot):
    bot.add_cog(Announce(bot))