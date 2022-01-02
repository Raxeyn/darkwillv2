const Discord = require("discord.js");

const fs = require("fs");

var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`<a:reddetmek:825688868107059201> Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın`);

  const db = require("quick.db");

  if (args[0] === "kapat") {

    if (db.has(`sKanal_${message.guild.id}`) === true) {

      db.delete(`sKanal_${message.guild.id}`);

      if (db.has(`sayac_${message.guild.id}`) === true) {

        db.delete(`sayac_${message.guild.id}`);

        message.channel.send("<a:onaylamak:825688895286280232> Sayaç Kanalı ve Sayaç Başarıyla Kaldırıldı");

        return;

      }

      message.channel.send("<a:onaylamak:825688895286280232> Sayaç Kanalı Kaldırıldı.");

      return;

    }

    message.channel.send(`<a:reddetmek:825688868107059201> Sayaç Kanalı Ayarlanmamış.`);

    return;

  }

  let channel = message.mentions.channels.first() || message.guild.channels.find(c => c.name === args.slice(0).join(" "));

  let prefix = ayarlar.prefix;

  if (!channel) {

    return message.reply("<a:reddetmek:825688868107059201> Lütfen Ayarlamak İstediğiniz Kanalı Giriniz");

  }

  db.set(`sKanal_${message.guild.id}`, channel.id);

  const embed = new Discord.MessageEmbed()

    .setDescription(`<a:onaylamak:825688895286280232> Sayaç Kanalı Başarı İle Ayarlandı: ${channel}\nSayaç Kanalını Kapatmak İsterseniz **${prefix}sayaç-kanal kapat** Yazmanız Yeterlidir.`

    )

    .setColor("RANDOM")

    .setTimestamp()

  message.channel.send(embed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["sayaç-kanal-belirle", "sayaç-kanal"],

  permLevel: 0

};

exports.help = {

  name: "sayaç-kanal-ayarla",

  description: "Sayaç kanalını ayarlar.",

  usage: "sayaç-kanal-ayarla <#kanal>"

};

