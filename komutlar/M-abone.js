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

      `<a:alarmm:723850034961055774> Darkwill Abone Menüsüne Hoşgeldiniz <a:alarmm:723850034961055774>`

    )

    .addField(

      `**__Abone Log Ayarlama__**`,

      `<a:alarmm:723850034961055774> \`${prefix}abone-log\` \n Abone Log Ayarlar`,

      true

    )

    .addField(

      `**__Abone Rol Ayarlama__**`,

      `<a:ayar:825679362518417459> \`${prefix}abone-rol\` \n Abone Rol Ayarlarsınız`,

      true

    )

    .addField(

      `**__Abone Yetkili Ayarlama__**`,

      `<a:aa:774263704098308136> \`${prefix}abone-yetkili\` \n Abone Yetkili Ayarlarsınız`,

      true

    )

    .addField(

      `**__Abone Rolü Verme__**`,

      `<a:ayar:825679362518417459> \`${prefix}a\` \n Abone Rolü Verir`,

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

  name: "abone-sistemi",

  description: "İstediğiniz kullanıcını bilgilerini gösterir.",

  usage: "seviye"

};