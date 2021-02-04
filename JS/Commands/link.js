// THIS GETS THE PERMANENT LIKE TO THE SERVER

module.exports = {
    name: 'discord',
    description: "Embed for discord Command",
    execute(message, args, Discord){
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        .setTitle('**__Permanent Invite Link__**')
// ENTER YOUR  SERVER LINK
        .setDescription(`PUT YOUR SERVER'S LINK HERE`)
        .setFooter('ENTER SERVER NAME HERE ©')
        .setTimestamp();

        message.channel.send(newEmbed);
    }
}
