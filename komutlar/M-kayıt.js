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

      `<a:alarmm:723850034961055774> Darkwill Kayıt Menüsüne Hoşgeldiniz <a:alarmm:723850034961055774>`

    )

    .addField(

      `**__Alınacak Rol__**`,

      `<a:ayar:825679362518417459> \`${prefix}alınacak-rol\` \n Alınacak Rolü Ayarlar`,

      true

    )

    .addField(

      `**__Erkek Rol__**`,

      `<a:ayar:825679362518417459> \`${prefix}erkek-rol\` \n Erkek Rolü Ayarlar`,

      true

    )

    .addField(
     
      
     `**__Hoşgeldin Mesajı__**`,

      `<a:ayar:825679362518417459> \`${prefix}kayıt-hg\` \n Gelen Mesajı Ayarlar`,

      true

    )

    .addField(

      `**__Kayıt Kanal__**`,

      `<a:ayar:825679362518417459> \`${prefix}kayıt-kanal\` \n Kayıt Yapılacak Kanalı Ayarlar`,

      true

    )

    .addField(

      `**__Kayıt Yetkilisi__**`,

      `<a:ayar:825679362518417459> \`${prefix}kayıt-yetkilisi\` \n Kayıt Yetkilisi Ayarlar`,
      true

    )

    .addField(
 
      `**__Kız Rol__**`,
      
      `<a:ayar:825679362518417459> \`${prefix}kız-rol\` \n Kıza Verilecek Rolu Ayarlarsın`,
      true
      )
   
    .addField(
      
      `**__Erkek / Kız Kayıt__**`,
      
      `<a:ayar:825679362518417459> \`${prefix}k/e\` \n Cinsiyete Göre Kayıt Yapar`,
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

  name: "kayıt-sistemi",

  description: "İstediğiniz kullanıcını bilgilerini gösterir.",

  usage: "seviye"

};

