exports.run = (client, message) => {

  let db = require("quick.db");

  let Discord = require("discord.js");

  let reklam = db.fetch(`reklam.${message.guild.id}.durum`);

  const member3 = new Discord.MessageEmbed()

    .setColor("#00ff00")

    .setDescription(`<a:reddetmek:825688868107059201> - Bu sunucuda yetkili değilsin.`);

  if (!message.member.permissions.has("MANAGE_MESSAGES"))

    return message.channel.send(member3);

  const member = new Discord.MessageEmbed()

    .setColor("#00ff00")

    .setDescription(`<a:reddetmek:825688868107059201> - Bir kanal etiketle.`);

  if (reklam) {

    let kanal = message.mentions.channels.first();

    if (!kanal) return message.channel.send(member);

    db.set(`reklam.${message.guild.id}.kanal`, kanal.id);

    message.channel

      .send(

        new Discord.MessageEmbed()

          .setColor("#00ff00")

          .setDescription(

            ` **<a:onaylamak:825688895286280232> Başarılı Bir Şekilde Reklam Log Kanalı Ayarlandı.** `

          )

      )



  } else {

    message.channel

      .send(

        new Discord.MessageEmbed()

          .setColor("#00ff00")

          .setDescription(` **<a:onaylamak:825688895286280232> Reklam Engel Koruması Açık Değil**`)

      )



  }

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["reklam-log"],

  permLevel: 0

};

exports.help = {

  name: "reklamlog",

  description: "CrazyGenel",

  usage: "CrazyGenel"

};

