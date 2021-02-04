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
            value: `2 Bots`,
            inline: true
          },
          {
            name: ':small_blue_diamond: Bots',
            value: `<@806527279785312297>, <@806652686892138526>`,
            inline: true
          },
          {
            name: ":small_blue_diamond: Roles Count",
            value: `${message.guild.roles.cache.size} roles`,
            inline: true
          },
          {
            name: ':small_blue_diamond: Roles',
            value: "<@&806427047689322497> <@&806422588447653921> ",
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
            value: `February 2rd, 2021`,
            inline: true
          },
          {
            name: ':small_blue_diamond: Time Created',
            value: `10:14 PM`,
            inline: true
          }
        )
        .setTimestamp()
        .setFooter('Benet Academy ©');
  
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