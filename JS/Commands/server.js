module.exports = {
    name: 'server',
    description: "Embed for server Command",
    execute(message, args, Discord) {
      const newEmbed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL())
        .setColor('#f3f3f3')
        .setThumbnail(message.guild.iconURL())
        .setDescription(`Owner: ${message.guild.owner}`)
        .addFields(
          {
            name: ':small_blue_diamond: Member Count',
            value: `${message.guild.memberCount} members`,
            inline: true
          },
          {
            name: ':small_blue_diamond: Bot Count',
///////////////////////////////////////////////////////////////////////////////////////////////////////
            value: `YOUR NUMBER OF BOTS HERE`,
///////////////////////////////////////////////////////////////////////////////////////////////////////
            inline: true
          },
          {
            name: ':small_blue_diamond: Bots',
///////////////////////////////////////////////////////////////////////////////////////////////////////
            value: `<@ YOUR BOT ROLE ID HERE >, <@ YOUR BOT ROLE ID HERE >`,
///////////////////////////////////////////////////////////////////////////////////////////////////////
            inline: true
          },
          {
            name: ":small_blue_diamond: Roles Count",
            value: `${message.guild.roles.cache.size} roles`,
            inline: true
          },
          {
            name: ':small_blue_diamond: Roles',
///////////////////////////////////////////////////////////////////////////////////////////////////////
            value: "<@& YOUR ROLE ID HERE > <@& YOUR ROLE ID HERE > ",
///////////////////////////////////////////////////////////////////////////////////////////////////////
            inline: true
          },
          {
            name: ':small_blue_diamond: Emojis',
            value: `${message.guild.emojis.cache.size} emojis`,
            inline: true
          },
          {
            name: ':small_blue_diamond: AFK Timeout',
            value: `${message.guild.afkTimeout / 60} minutes`,
            inline: true
          },
          {
            name: ':small_blue_diamond: AFK Channel',
            value: `${message.guild.afkChannelID === null ? 'No AFK Channel' : client.channels.get(message.guild.afkChannelID).name} (${message.guild.afkChannelID === null ? '' : message.guild.afkChannelID})`,
            inline: true
          },
          {
            name: ':small_blue_diamond: Location',
            value: message.guild.region,
            inline: true
          },
          {
            name: ':small_blue_diamond: Date Created',
///////////////////////////////////////////////////////////////////////////////////////////////////////
            value: `ENTER THE DATE YOUR SERVER WAS CREATED (MM/DD/YYYY)`,
///////////////////////////////////////////////////////////////////////////////////////////////////////
            inline: true
          },
          {
            name: ':small_blue_diamond: Time Created',
///////////////////////////////////////////////////////////////////////////////////////////////////////
            value: `ENTER THE TIME YOUR SERVER WAS CREATED FOLLOWED BY AM OR PM`,
///////////////////////////////////////////////////////////////////////////////////////////////////////
            inline: true
          }
        )
        .setTimestamp()
///////////////////////////////////////////////////////////////////////////////////////////////////////
        .setFooter('ENTER SERVER NAME HERE ©');
///////////////////////////////////////////////////////////////////////////////////////////////////////
  
      message.channel.send(newEmbed);
    }
  }
  
  exports.conf = {
    enabled: true,
    aliases: ['info', 'stats', 'serverstats', 'guildinfo', 'guildstats'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'server',
    description: 'Displays server information & statistics',
    usage: 'server',
    category: 'commands',
  };
