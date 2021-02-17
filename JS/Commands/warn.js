// const { MessageEmbed } = require('discord.js')
// var db = require('quick.db')

// module.exports = {
//     name: 'warn',
//     category: 'commands',
//     usage: 'warn <@mention> <reason>',
//     description: 'Warn anyone who does not follow the rules',
//     run: async (client, message, agrs) => {
        
//         if(!message.member.hasPermission("ADMINISTRATOR")) {
//             return message.channel.send("You need to have admin permissions to use this command!")
//         }

//         const user = message.mentions.members.first()

//         if(!user) {
//             return message.channel.send("Please mention the person you who you want to warn!")
//         }

//         if(message.mentions.users.first().bot) {
//             return message.channel.send("You cannot warn bots!")
//         }

//         const reason = args.slice(1).join(" ")

//         if(!reason) {
//             return message.channel.send("Please provide a reason!")
//         }

//         let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

//         if(warnings === 3) {
//             return message.channel.send(`${message.mentions.users .first().username} already reached their warn limit of 3 warnings!`)
//         }

//         if(warnings === null) {
//             db.set(`warnigs_${message.guilf.id}_${user.id}`, 1)
//         user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
//         await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)
//         } else if(warnings !== null) {
//             db.add(`warnings_${message.guild.id}_${user.id}`, 1)
//             user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
//             await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)        }
//         }
//     }