module.exports = {
    name: 'ping',
    aliases: ['ms','wifi','connection','signal','botwifi','botconnection'],
    cooldown: 3,
    description: "Embed for ping Command",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        .setDescription(`🏓Latency is ${Date.now() - message.createdTimestamp}ms`)
        .setFooter('Benet Academy ©');
    
        message.channel.send(newEmbed);
    }
}