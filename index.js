const Discord = require('discord.js');
const { token } = require('./config.json')
const bot = new Discord.Client();

const discordToken = token

bot.on('ready', () => {
  console.log('This bot is online!')
})

bot.on('message', msg => {
  if(msg.content === "HELLO") {
    msg.reply('Hello Friend!');
  }
})

bot.login(discordToken);
