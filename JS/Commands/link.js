module.exports = {
    name: 'link',
    aliases: ['discord','lnk','permalink','permanentlink','invitesomeone','lk','links'],
    cooldown: 3,
    description: "Embed for link Command",
    execute(client, message, args, Discord){
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        .setTitle('**__Permanent Invite Link__**')
        .setDescription(`https://discord.gg/aRKAMfsUH7`)
        .setFooter('Benet Academy ©')
        .setTimestamp();

        message.channel.send(newEmbed);
    }
}