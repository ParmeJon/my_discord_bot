const Discord = require('discord.js');
const { token } = require('./config.json')
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
  }
})

bot.login(discordToken);
