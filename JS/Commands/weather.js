var weather = require('weather-js');

module.exports = {
    name: "weather",
    description: "Checks a weather forecast",

    async execute (client, message, args, Discord){

    weather.find({search: args.join(" "), degreeType: 'F'}, function (error, result){
        // 'C' can be changed to 'F' for farneheit results
        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send(`${message.author}, Please specify a location`)

        if(result === undefined || result.length === 0) return message.channel.send(`${message.author}, **Invalid** location`);

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather forecast for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(`#f3f3f3`)
        .addField('Timezone', `UTC${location.timezone}`, true)
        .addField('Degree Type', 'Farenheit', true) // If you changed 'F' to 'C' then make sure this corresponds with Farenheit or Celcius
        .addField('Temperature', `${current.temperature}°`, true)
        .addField('Wind', current.winddisplay, true)
        .addField('Feels like', `${current.feelslike}°`, true)
        .addField('Humidity', `${current.humidity}%`, true)


        message.channel.send(weatherinfo)
        })        
    }
}