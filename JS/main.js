const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE","CHANNEL","REACTION"]}); // partials are for reaction roles

client.commands = new Discord.Collection();
client.events = new Discord.Collection();


// These are your command handler and event handlers! They make your code look much cleaner and easier to navigate.
// A new file is created for both of them (command_handler.js + event_handler.js)
['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`) (client, Discord);
})

const { Client, Collection, MessageEmbed } = require("discord.js");






// This next part sends a message to a certain channel with an embed telling everyone that a user has joined the guild/server...
client.on('guildMemberAdd', (member) => {
	const embed = new MessageEmbed()
		.setTitle(`Welcome to Benet Coding`)
		.setColor('#f3f3f3')
		.setThumbnail(member.user.displayAvatarURL())
		.setTimestamp()
		.addField("Name", member.user.username)
	member.guild.channels.cache.get('806413327403450401').send({ embed }) // This step will be different for you. You need to copy the channel id of the channel you want the welcome message to go to! Your code should look like this...
//	member.guild.channels.cache.get('YOUR CHANNEL ID HERE').send({ embed })
});






client.login(process.env.DISCORD_TOKEN); // This will be different from yours. Look below for what yours should look like...
//client.login(YOUR BOT TOKEN HERE);