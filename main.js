const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('testbot is online!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args, Discord);
    } else if (command == 'user') {
        client.commands.get('user').execute(message, args, Discord);
    } else if (command == 'server') {
        client.commands.get('server').execute(message, args, Discord);
    } else if (command == 'link') {
        client.commands.get('link').execute(message, args, Discord);
    } else if (command == 'discord') {
        client.commands.get('discord').execute(message, args, Discord);
    }
});





// const { Client, Collection, MessageEmbed } = require("discord.js");

// client.on('guildMemberAdd', (member) => {
// 	const embed = new MessageEmbed()
// 		.setTitle(`Welcome to Benet Coding`)
// 		.setColor('#f3f3f3')
// 		.setThumbnail(member.user.displayAvatarURL())
// 		.setTimestamp()
// 		.addField("Name", member.user.username)
// 	member.guild.channels.cache.get('806413327403450401').send({ embed })
// });

client.login('ODA2NjUyNjg2ODkyMTM4NTI2.YBsj2w.jVpBmfHPX2o_myjiZhcjxMMgYQo');











































// const Discord = require('discord.js');

// const client = new Discord.Client();

// const prefix = '-';

// const fs = require('fs');

// client.commands = new Discord.Collection();

// const commandFiles = fs.readdirSync('./Commands/').filter(File => File.endsWith('.js'));
// for (const file of commandFiles) {
// 	const command = require(`./Commands/${file}`);

// 	client.commands.set(command.name, command);
// }

// client.once('ready', () => {
// 	console.log('TEST BOT is online!');
// 	client.user.setActivity('for people who use discord.js :)', { type: 'WATCHING' });
// });





















// // client.on('message', message => {

// // 	if (!message.content.startsWith(prefix) || message.author.bot) return;

// // 	const args = message.content.slice(prefix.length).split(/ +/);
// // 	const command = args.shift().toLowerCase();

// // 	if (command === 'ping') {
// // 		client.commands.get('ping').execute(message, args, Discord)
// // 	}
// // });








// const { Client, Collection, MessageEmbed } = require("discord.js");

// client.on('guildMemberAdd', (member) => {
// 	const embed = new MessageEmbed()
// 		.setTitle(`Welcome to Benet Coding`)
// 		.setColor('#f3f3f3')
// 		.setThumbnail(member.user.displayAvatarURL())
// 		.setTimestamp()
// 		.addField("Name", member.user.username)
// 	member.guild.channels.cache.get('806413327403450401').send({ embed })
// });

// client.login('ODA2NjUyNjg2ODkyMTM4NTI2.YBsj2w.F2tClMpnSAyNnRtyagQmJBzkNzU');