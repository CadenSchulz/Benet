import discord
from discord.ext import commands


class Announce(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name='announce', aliases=["a"])
    async def announce(self, ctx, *, msg):
        await ctx.send(msg)
        await ctx.message.delete()


def setup(bot):
    bot.add_cog(Announce(bot))
