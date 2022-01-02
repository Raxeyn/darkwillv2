const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
const ayarlar = require('../ayarlar.json');
let talkedRecently = new Set();
module.exports = message => {
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 2500);
  let prefix = ayarlar.prefix
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  
 ///////////if (!client.commands.has(command)) {
 //////////   if (client.aliases.has(command)) {
 //////////     cmd = client.commands.get(client.aliases.get(command));
 //////////   } else {
//////////      if(command == '') return;
//////////const pixel = new Discord.MessageEmbed()
//////////.setDescription("<a:HataGif:850690836777402369> Botta `" + command + '` Adında Bir Komut Bulunamadı.')
//////////.setColor('#2c2f33')
//////////.setTimestamp()
//////////    message.reply(pixel)
//////////  }
//////////  }

  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};


