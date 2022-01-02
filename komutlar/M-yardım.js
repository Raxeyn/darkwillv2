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
      `<a:alarmm:723850034961055774> Darkwill Yardım Menüsüne Hoşgeldiniz <a:alarmm:723850034961055774>`
    )
    .addField(
      `**__Moderasyon Komutları__**`,
      `<a:ayar:825679362518417459> \`${prefix}moderasyon\``,
      true
    )
    .addField(
      `**__Koruma Komutları__**`,
      `<a:ayar:825679362518417459> \`${prefix}koruma\``,
      true
    )
    .addField(
      `**__Eğlence Komutları__**`,
      `<a:B_Yildiz:825644101985894400> \`${prefix}eğlence\``,
      true
    )
    .addField(
      `**__Abone Komutları__**`,
      `<a:ayar:825679362518417459> \`${prefix}abone-sistemi\``,
      true
    )
    .addField(
      `**__Otorol Komutlar__**`,
      `<a:hypesquad:760468013685669900> \`${prefix}otorol-sistemi\``,
      true
    )
    .addField(
      `**__Kayıt Komutları__**`,
      `<a:ayar:825679362518417459> \`${prefix}kayıt-sistemi\``,
     true
     )
    .addField(
      `**__Spam Komutları__**`,
      `<a:ayar:825679362518417459> \`${prefix}spam-sistemi\``,
     true
     )
    .addField(
      `**__Müzik Komutları__**`,
      `<a:ayar:825679362518417459> \`${prefix}müzik-menüsü\``,
    true
     )
    .addField(
      `**__YouTube Komutu__**`,
      `<a:Youtube:927108629822328922> \`${prefix}youtube\``,
    true
     )
    .addField(
      `**__Yenilikler Komutu__**`,
      `<a:gold:827237397230125067> \`${prefix}yenilikler\``,
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
  aliases: ["y", "help"],
  permLevel: 0
};
exports.help = {
  name: "yardım",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "seviye"
};
