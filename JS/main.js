const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE","CHANNEL","REACTION"]});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`) (client, Discord);
})

const { Client, Collection, MessageEmbed } = require("discord.js");

client.on('guildMemberAdd', (member) => {
	const embed = new MessageEmbed()
		.setTitle(`Welcome to Benet Coding`)
		.setColor('#f3f3f3')
		.setThumbnail(member.user.displayAvatarURL())
		.setTimestamp()
		.addField("Name", member.user.username)
	member.guild.channels.cache.get('806413327403450401').send({ embed })
});


client.login(process.env.DISCORD_TOKEN);