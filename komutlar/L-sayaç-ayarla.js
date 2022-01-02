const Discord = require("discord.js");

const fs = require("fs");

const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {

  const db = require("quick.db");

  let prefix = ayarlar.prefix;

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`<a:reddetmek:825688868107059201> Bu Komutu Kullanabilmek için **Yönetici** İznine Sahip Olmalısın!`);

  if (!args[0]) {

    return message.reply("<a:reddetmek:825688868107059201> Lütfen Ayarlamak İstediğiniz Sayıyı Yazınız");

  }

  if (args[0] === "kapat") {

    if (db.has(`sayac_${message.guild.id}`) === true) {

      db.delete(`sayac_${message.guild.id}`);

      if (db.has(`sKanal_${message.guild.id}`) === true) {

        db.delete(`sKanal_${message.guild.id}`);

        message.channel.send("<a:onaylamak:825688895286280232> Sayaç Kanalı Ve Sayaç Başarıyla Kaldırıldı");

        return;

      }

      message.channel.send("<a:onaylamak:825688895286280232> Sayaç Başarı İle Kaldırıldı.");

      return;

    }

    message.channel.send(`<a:reddetmek:825688868107059201> Malesef Sayaç Ayarlanmamış.`);

    return;

  }

  if (isNaN(args[0])) {

    return message.reply("<a:reddetmek:825688868107059201> Sadece Sayı!");

  }

  if (args[0] <= message.guild.memberCount) {

    const embed = new Discord.MessageEmbed();

    return message.reply("<a:reddetmek:825688868107059201> Lütfen Sunucu Sayısından Daha Yüksek Bir Değer Girin!" );

  }

  db.set(`sayac_${message.guild.id}`, args[0]);

  const embed = new Discord.MessageEmbed()

    .setTimestamp()

    .setAuthor(`

Sayaç Başarıyla Ayarlandı: ${args[0]}

Sayaç Kapatmak İsterseniz ${prefix}sayaç-kapat Yazmanız Yeterlidir.

Sayaç Kanalı İçin s!sayaç-kanal-ayarla #kanal

`);

  message.channel.send(embed);

};

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ["sayacayarla", "sayac", "sayaç"],

  permLevel: 0

};

exports.help = {

  name: "sayaç-ayarla",

  description: "Sayacı ayarlar.",

  usage: "saya-çayarla "

};

