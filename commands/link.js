module.exports = {
    name: 'link',
    description: "Embed for link Command",
    execute(message, args, Discord){
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