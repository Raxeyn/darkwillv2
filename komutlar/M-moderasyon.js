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

      `<a:alarmm:723850034961055774> Darkwill Moderasyon Menüsüne Hoşgeldiniz <a:alarmm:723850034961055774>`

    )

    .addField(

      `**__Selam Aç__**`,

      `<a:ayar:825679362518417459> \`${prefix}sa-as\` \n Selam Açarsınız`,

      true

    )

    .addField(

      `**__Sil__**`,

      `<a:ayar:825679362518417459> \`${prefix}sil\` \n Mesaj Silersiniz`,

      true

    )

    .addField(

      `**__Say__**`,

      `<a:ayar:825679362518417459> \`${prefix}say\` \n Sunucunun Durumunu Atar`,

      true

    )

    .addField(

      `**__Ping__**`,

      `<a:ayar:825679362518417459> \`${prefix}ping\` \n Pingi Atar`,

      true

    )
  
    .addField(
      
      `**__Sayaç__**`,
      
      `<a:ayar:825679362518417459> \`${prefix}sayaç-ayarla\` - \`${prefix}sayaç-kanal-ayarla\` \n Sayaç Ayarlarsın`,
      
      true
      
      )
  
     .addField(
       
       `**__Resimli Hg-Bb__**`,
       
       `<a:ayar:825679362518417459> \`${prefix}hg-bb-ayarla\` - \`${prefix}hg-bb-kapat\` \n Resimli Giriş Çıkış Ayarlarsın`,
       
       true
  
       )
  
      .addField(
        
        `**__Bot Bilgi__**`,
        
        `<a:ayar:825679362518417459> \`${prefix}istatistik\` \n Bot Hakkında Bilgi Alırsınız`,
        
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

  aliases: ["mod"],

  permLevel: 0

};

exports.help = {

  name: "moderasyon",

  description: "İstediğiniz kullanıcını bilgilerini gösterir.",

  usage: "seviye"

};

