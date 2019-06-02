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

        message.channel.send(JSON.stringify(result, null, 2))
      })
      break;
  }
})

bot.login(discordToken);
