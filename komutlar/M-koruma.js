const Discord = require("discord.js");

const prefix = process.env.prefix;

exports.run = async (bot, msg, args) => {

  const embed = new Discord.MessageEmbed()

    .setAuthor(`Darkwill`)

    .setTitle(``)

    .setColor("#FF0000")

    .setThumbnail(

      ""

    )

    .setDescription(

      `<a:alarmm:723850034961055774> Darkwill Koruma Menüsüne Hoşgeldiniz <a:alarmm:723850034961055774>`

    )

    .addField(

      `**__Ban__**`,

      `<a:ayar:825679362518417459> \`${prefix}ban\` \n Ban Atarsınız`,

      true

    )

    .addField(

      `**__Ban Yetkilisi__**`,

      `<a:ayar:825679362518417459> \`${prefix}ban-yetkili\` \n Ban Yetkilisi Ayarlarsınız`,

      true

    )

    .addField(

      `**__Ban Log__**`,

      `<a:ayar:825679362518417459> \`${prefix}ban-log\` \n Ban Log Ayarlarsınız`,

      true

    )

    .addField(

      `**__Reklam Engel__**`,

      `<a:ayar:825679362518417459> \`${prefix}reklam-engel\` \n Reklam Engel Ayarlarsınız`,

      true

    )

    .addField(

      `**__Reklam Log__**`,

      `<a:ayar:825679362518417459> \`${prefix}reklam-log\` \n Reklam Logu Ayarlarsınız`,
      
      true

    )

    .addField(

      `**__Küfür Engel__**`,

      `<a:ayar:825679362518417459> \`${prefix}küfür-engel\` \n Küfür Engel Ayarlarsınız`,
      
      true

      )

    .addField(
      
      `**__Küfür Log__**`,
      
      `<a:ayar:825679362518417459> \`${prefix}küfür-log\` \n Küfür Log Ayarlarsınız`,
      
      true
      
      )
  
    .addField(
      
      `**__Mod Log__**`,
      
      `<a:ayar:825679362518417459> \`${prefix}mod-log\` \n Mod Log Ayarlarsınız`,
      
      true
      
      )
  
    .addField(
      
      `**__Kick__**`,
      
      `<a:ayar:825679362518417459> \`${prefix}kick\` \n Üyeleri Atar`,
      
      true
      
     
      )
  
    .addField(
      
      `**__Kick Log__**`,
      
      `<a:ayar:825679362518417459> \`${prefix}kick-log-ayarla\` \n Kick Log Ayarlar `,
      
      true
      
      )
  
    .addField(
      
      `**__Kick Yetkilisi__**`,
      
      `<a:ayar:825679362518417459> \`${prefix}kick-yetkilisi-ayarla\` \n Kick Yetkilisi Ayarlar `,
      
      true
      
     )
  
.addField(
      `**__Oy Kullan__**`,
      `**<a:Discord:737981764919754753> [Destek Sunucusuna Katılmak İçin Tıkla](https://discord.gg/t4E6JwXVqP)**`
    )
  

.setImage("https://cdn.discordapp.com/attachments/795992076411207690/927106033476837386/standard_1.gif")
  

  return msg.channel.send(embed);

};

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: "koruma",

  description: "İstediğiniz kullanıcını bilgilerini gösterir.",

  usage: "seviye"

};

