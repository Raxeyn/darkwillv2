const Discord = require('discord.js');

const db = require('quick.db');

exports.run = async (client, message, args) => {

  let spamyetkilirol = message.mentions.roles.first()

  if (!spamyetkilirol) return message.channel.send('<a:reddetmek:825688868107059201> Lütfen yetkili rolünü etiketlermisin?')

   

  db.set(`spamyetkilisi_${message.guild.id}`, spamyetkilirol.id)

  message.channel.send(`<a:onaylamak:825688895286280232> Yetkili Rolü Başarıyla Ayarlandı; **${spamyetkilirol}**`)

 };

exports.conf = {

 enabled: true,

 guildOnly: false,

 aliases: ['spam-yetkilisi-ayarla'],

 permLevel: 3,

  kategori:"yetkili"

};

exports.help = {

 name: 'spam-yetkilisi-ayarla',

 description: 'Kick Yetkili Rolunu Ayarlar',

 usage: 'spam-yekili-rol <@rol>'

};