const Discord = require('discord.js');

const db = require('quick.db');

exports.run = async (client, message, args) => {

 let kicklogkanal = message.mentions.channels.first()

if (!kicklogkanal) return message.channel.send('<a:reddetmek:825688868107059201> Lütfen Kicklog Kanalını Etiketlermisin?')

   

  db.set(`kicklog_${message.guild.id}`, kicklogkanal.id)

 

  message.channel.send(`<a:onaylamak:825688895286280232> KickLog Kanalı Başarıyla Ayarlandı; **${kicklogkanal}**`)

 };

exports.conf = {

 enabled: true,

 guildOnly: false,

 aliases: ['kick-log-ayarla'],

 permLevel: 3,

kategori:"yetkili"

};

exports.help = {

 name: 'kicklog-ayarla',

 description: 'KickLog Kanalini Ayarlarsınız',

 usage: 'kicklog-kanal <#kanal>'

};