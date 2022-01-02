const Discord = require('discord.js');

const db = require('quick.db');

exports.run = async (client, message, args) => {

  let kickyetkilirol = message.mentions.roles.first()

  if (!kickyetkilirol) return message.channel.send('<a:reddetmek:825688868107059201> Lütfen yetkili rolünü etiketlermisin?')

   

  db.set(`kickyetkilisi_${message.guild.id}`, kickyetkilirol.id)

  message.channel.send(`<a:onaylamak:825688895286280232> Yetkili Rolü Başarıyla Ayarlandı; **${kickyetkilirol}**`)

 };

exports.conf = {

 enabled: true,

 guildOnly: false,

 aliases: ['kick-yetkilisi-ayarla'],

 permLevel: 3,

  kategori:"yetkili"

};

exports.help = {

 name: 'kickyetkilisi-ayarla',

 description: 'Kick Yetkili Rolunu Ayarlar',

 usage: 'kick-yekili-rol <@rol>'

};