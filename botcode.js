import discord
from discord.ext import commands

client = commands.Bot(command_prefix = '+')

@client.event
async def on_ready():
    channel = client.get_channel(697524915145932801)
    await channel.send(f'**The Bot is now online!**')
    await client.change_presence(status=discord.Status.online, activity=discord.Game('with the kittens'))
    print('The Bot is now online')

@client.event
async def on_member_join(member):
    channel = client.get_channel(697525314774892596)
    await channel.send(f"**{member.mention} Has joined the server!**")
    print(f'{member} has joined a server.')

@client.event
async def on_member_remove(member):
    channel = client.get_channel(697525314774892596)
    await channel.send(f'**{member.mention} Has left the server!**')
    print(f'{member} has left a server')

@client.command()
async def ping(ctx):
    channel = client.get_channel(697478780863775092)
    await channel.send(f'Pong! {round(client.latency * 1000)}ms')

@client.command()
async def lol(ctx):
    channel = client.get_channel(697478780863775092)
    await channel.send(f'**Its laugh out loud you uneducated potato!**')

@client.command()
async def die(ctx):
    channel = client.get_channel(697478780863775092)
    await channel.send('**screams in agony**')

@client.command()
async def staffhelp(ctx):
    channel = client.get_channel(697530921070493711)
    await channel.send('```This is the staff help command! This menu shows every single command that is related to staff!\n\n==============================================================================================\nThe commnad +kick kicks a member from the server!\n==============================================================================================\n+ban bans an user permanently\n==============================================================================================\n+clear(amount) clears the amount of messages you want\n==============================================================================================```')

@client.command()
async def h0ckermon(ctx):
    channel = client.get_channel(697478780863775092)
    await channel.send('**h0ckermon? i havent heard that name in years...**')

@client.command()
async def serverhelp(ctx):
    channel = client.get_channel(697478780863775092)
    await channel.send('```This is the servers help command! It shows every single command i coded!\n========================================================================\nType +lol to gain a message!\n========================================================================\nType +die to gain a message!\n========================================================================\nType +ping to receive the bots ping!\n========================================================================\nType +h0ckermon to gain a message!\n========================================================================\nType +botinfo to gain info about the bot!\n========================================================================\nBy typing +serverhelp you will open this menu!\n========================================================================```')
    
@client.command()
async def botinfo(ctx):
    channel = client.get_channel(697478780863775092)
    await channel.send("```This bots name has been inspired by the owner of this server.\n\nAnd coded by Harumei. Huge thanks to Fury for helping me code the bot!```")

@client.command()
@commands.has_permissions(manage_messages=True)
async def clear(ctx, amount: int):
    await ctx.channel.purge(limit=amount + 1)

@client.command()
@commands.has_permissions(kick_members=True)
async def kick(ctx, member : discord.Member, *, reason=None):
    await member.kick(reason=reason)
    msg = await ctx.send(f'**{member.mention} Has been kicked for {reason}**')
    delete_after=5.0

@client.command()
@commands.has_permissions(ban_members=True)
async def ban(ctx, member : discord.Member, *, reason=None):
    await member.ban(reason=reason)
    msg = await ctx.send(f'**{member.mention} Has been banned for {reason}**')
    delete_after=5.0

@client.command()
@commands.has_permissions(ban_members=True)
async def unban(ctx, id: int):
    user = await bot.fetch_user(id)
    await ctx.guild.unban(user)
    msg = await ctx.send(f'**{member.mention} Has been unbanned**')
    delete_after=5.0

client.run('Njk3NDY3Mzg0OTA2MjUyNDA4.Xo9M4w.ihYiHf5IgxnOrH5LGQLeW6Wexxk')
