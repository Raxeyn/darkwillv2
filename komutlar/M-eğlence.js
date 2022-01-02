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

      `<a:alarmm:723850034961055774> Darkwill Eğlence Menüsüne Hoşgeldiniz <a:alarmm:723850034961055774>`

    )


    .addField(

      `**__Trump Tweet__**`,

      `<a:alarmm:723850034961055774> \`${prefix}trumptweet\` \n Trump Adına Tweet Atar`,

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

  name: "eğlence",

  description: "İstediğiniz kullanıcını bilgilerini gösterir.",

  usage: "seviye"

};

