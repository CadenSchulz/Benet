const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "user",
    aliases: ['person', 'me', 'you', 'person info', 'users'],
    category: "Commands",
    execute(message, args, Discord){
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//        THIS WHOLE NEXT PART WILL NOT WORK UNLESS YOU MAKE AN EMOJI OF EACH OF THE FOLLOWING: Online, Offline, Do Not Disturb, Idle.
//          --Then in your discord channel, type \ followed by the emoji. This will give you the Emoji Prefix and ID of the emoji--
//              --Example: (:online:806673127303544882)
//              --Example: (:dnd:806673148538912858)
//              --Example: (:idle:806673170429378670)
//              --Example: (:offline:806673140339572777)
//          --ENTER YOUR EMOJI PREFIX AND ID BELOW THIS--
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        let status;
        switch (user.presence.status) {
            case "online":
                status = "Online <:online:806673127303544882>";
                                    //Yours ABOVE
                break;
            case "dnd":
                status = "Do Not Disturb <:dnd:806673148538912858>";
                                    ////Yours ABOVE
                break;
            case "idle":
                status = "Idle <:idle:806673170429378670>";
                                    //Yours ABOVE
                break;
            case "offline":
                status = "Offline <:offline:806673140339572777>";
                                    //Yours ABOVE
                break;
        };

        const embed = new MessageEmbed()
            .setTitle(`${user.user.username} stats`)
            .setColor(`#f3f3f3`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: ":information_source: **Name: **",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "#️⃣ **Discriminator:** ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "🆔 **ID:** ",
                    value: user.user.id,
                },
                {
                    name: ":globe_with_meridians: **Current Status: **",
                    value: status,
                    inline: true
                },
                {
                    name: ":eyes: **Activity:** ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `User isn't playing a game!`,
                    inline: true
                },
                {
                    name: ':link: **Avatar link:** ',
                    value: `[Click Here](${user.user.displayAvatarURL()})`
                },
                {
                    name: ':baby: **Creation Date: **',
                    value: user.user.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: ':calendar_spiral: **Joined Date: **',
                    value: user.joinedAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: ':roll_of_paper: **User Roles: **',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
            )
/////////////////////////////////////////////////////////////////////////
// THE FOLLOWING IS NOT REQUIRED, BUT IT ADDS REACTIONS TO THE MESSAGE //
/////////////////////////////////////////////////////////////////////////
        message.channel.send(embed).then(message => {
            message.react('🇬')
            message.react('🇷');
            message.react('🇪')
            message.react('🇦');
            message.react('🇹')
            message.react('❔');
        })
/////////////////////////////////////////////////////////////////////////
        
        
    }
}
