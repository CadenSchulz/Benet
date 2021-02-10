module.exports = {
    name: 'ping',
    description: "Embed for ping Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        .setDescription(`🏓Latency is ${Date.now() - message.createdTimestamp}ms`)
///////////////////////////////////////////////////////////////////////////////////////////////////////
        .setFooter('ENTER SERVER NAME HERE ©');
///////////////////////////////////////////////////////////////////////////////////////////////////////
        message.channel.send(newEmbed);
    }
}
