module.exports = {
    name: 'club',
    aliases: ['clu', 'clb', 'googleform', 'googledoc', 'excelsheet', 'excel', 'clubform'],
    cooldown: 3,
    description: "Embed for club Command",
    execute(client, message, args, Discord){
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        .setThumbnail(message.guild.iconURL())
        .setTitle('**__Benet Coding Club__**')
        .addFields(
        {
            name: `Excel Sheet for People\s Names and Emails:`,
            value: `[click here](https://1drv.ms/x/s!AmASj4v_RbxugWPoqhK_aJDXEQcc?e=x6N6PF)`,
            inline: true
        },
        {
            name: `Google Form to Fill out when joining:`,
            value: `[click here](https://forms.gle/yFh9goqQ1fkDB9tG7)`,
            inline: true
        },
        {
            name: `Discord Link:`,
            value: `[click here](https://discord.gg/JTZ6TtTTSx)`,
            inline: true
        }
        )
        .setFooter('Benet Academy ©')
        .setTimestamp();

        message.channel.send(newEmbed);
    }
}