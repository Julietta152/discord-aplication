const { Client, Intents } = require('discord.js'); // wczytuje clienta 
const client = new Client({ intents: 32767,  messageCacheMaxSize: 1000, messageCacheLifetime: 43200, messageSweepInterval: 3600 }); 
const ms = require('ms');  
const chalk = require('chalk');
const config = require('./config.json');

client.on("messageCreate", async (message) => { //wykrywanie wiadomości
    const time = '300000'; 
    if(message.author.bot) return; //gdy autor wiadomości jest botem 
    if(message.member.permissions.has([ 'MANAGE_CHANNELS'  ])) return; 
    if(message.channel.id === "956955806065131561") { //kanał na, ktorym bot reaguje
        message.channel.permissionOverwrites.edit(`${message.author.id}`, { SEND_MESSAGES: false })// + console.log(`zabrałam możliwość pisania dla ` + chalk.red(`(${message.author.username}) ` + chalk.green(`( ${message.author.id} )`))) //zabiera pisanie dla kanału
        setTimeout(function(){
            message.channel.permissionOverwrites.edit(`${message.author.id}`, { SEND_MESSAGES: true }); //daje pisanie dla kanału
       }, time); //czekanie 2 dni
    }
})


client.login(config.TOKEN);
