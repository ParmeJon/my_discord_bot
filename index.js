const Discord = require('discord.js');
const { token } = require('./config.json')
const weather = require('weather-js')
const bot = new Discord.Client();

const discordToken = token
const PREFIX = '!';



bot.on('ready', () => {
  console.log('This bot is online!')
})

bot.on('message', message => {
  // if(msg.content === "HELLO") {
  //   msg.reply('Hello Friend!');
  // }
  let args = message.content.substring(PREFIX.length).split(" ");
  switch(args[0]){
    case 'ping':
      // message.reply('pong');
      message.channel.send('pong')
      break;
    case 'website':
      message.channel.send('https://www.youtube.com/jonsyvids')
      break;
    case 'weather':
      weather.find({search: args[1], degreeType: 'F'}, function(err, result) {
        if(err) message.channel.send(err);

        if (result.length === 0 || result === undefined) {
          message.channel.send("Please enter a valid location.")
          return;
        }

        // message.channel.send(JSON.stringify(result[0].current, null, 2))

        // Variables
        var current = result[0].current; // This is a variable for the current part of the JSON output
        var location = result[0].location; // This is a variable for the location part of the JSON output

        // Let's use an embed for this.
        const embed = new Discord.RichEmbed()
            .setDescription(`**${current.skytext}**`) // This is the text of what the sky looks like, remember you can find all of this on the weather-js npm page.
            .setAuthor(`Weather for ${current.observationpoint}`) // This shows the current location of the weather.
            .setThumbnail(current.imageUrl) // This sets the thumbnail of the embed
            .setColor(0x00AE86) // This sets the color of the embed, you can set this to anything if you look put a hex color picker, just make sure you put 0x infront of the hex
            .addField('Timezone',`UTC${location.timezone}`, true) // This is the first field, it shows the timezone, and the true means `inline`, you can read more about this on the official discord.js documentation
            .addField('Degree Type',location.degreetype, true)// This is the field that shows the degree type, and is inline
            .addField('Temperature',`${current.temperature} Degrees`, true)
            .addField('Feels Like', `${current.feelslike} Degrees`, true)
            .addField('Winds',current.winddisplay, true)
            .addField('Humidity', `${current.humidity}%`, true)

            // Now, let's display it when called
            message.channel.send({embed});
      })
      break;
  }
})

bot.login(discordToken);
