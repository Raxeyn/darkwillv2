const Discord = require("discord.js");

const prefix = process.env.prefix;

exports.run = async (bot, msg, args) => {

  const seviye = new Discord.MessageEmbed()

    .setAuthor(`Darkwill`)

    .setTitle(``)

    .setColor("#FF0000")

    .setThumbnail(

      ""

    )

    .setDescription(

      `<a:alarmm:723850034961055774> Darkwill Otorol Menüsüne Hoşgeldiniz <a:alarmm:723850034961055774>`

    )

    .addField(

      `**__Otorol Ayarlarsın__**`,

      `<a:ayar:825679362518417459> \`${prefix}otorol-ayarla\` \n Otorol Ayarlarsınız`,

      true

    )

    .addField(

      `**__Otorol Mesaj__**`,

      `<a:ayar:825679362518417459> \`${prefix}otorol-msg\` \n Otorol Mesajı Ayarlarsın`,

      true

    )

    .addField(

      `**__Otorol Kapat__**`,

      `<a:ayar:825679362518417459> \`${prefix}otorol-kapat\` \n Otorolu Kapatır`,

      true

    )

  .addField(
      `**__Oy Kullan__**`,
      `**<a:Discord:737981764919754753> [Destek Sunucusuna Katılmak İçin Tıkla](https://discord.gg/t4E6JwXVqP)**`
    )
  

.setImage("https://cdn.discordapp.com/attachments/795992076411207690/927106033476837386/standard_1.gif")
  msg.channel.send(seviye);

};

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: "otorol-sistemi",

  description: "İstediğiniz kullanıcını bilgilerini gösterir.",

  usage: "seviye"

};

