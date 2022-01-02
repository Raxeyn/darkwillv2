const Discord = require("discord.js");

const db = require("quick.db");

exports.run = (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR"))

    return message.channel.send(

      `<a:reddetmek:825688868107059201> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`

    );

  message.reply(

    `<a:onaylamak:825688895286280232> Bu özellik **başarıyla kapatıldı.** `

  );

  db.delete(`alınacakrol_${message.guild.id}`);

  db.delete(`erkekrol_${message.guild.id}`);

  db.delete(`kayıthg_${message.guild.id}`);
  
  db.delete(`kayıtkanal_${message.guild.id}`);
  
  db.delete(`kayıtçırol_${message.guild.id}`);
  
  db.delete(`kızrol_${message.guild.id}`);
};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["kayıt-kapat", "kayıtkapat"],

  permLevel: 0

};

exports.help = {

  name: "kayıt-kapat",

  description: "taslak",

  usage: "kayıt-kapat"

};
