const Discord = require("discord.js");

exports.run = async (client, message) => {

  let prefix = process.env.prefix;

  const fynxcode = new Discord.MessageEmbed()

    .setColor("#00ff00")

    .setDescription(

      `**<a:yklenme:825679011920216084> Tablo Güncellenme Tarihi: \`01.01.2022\`\n<a:yklenme:825679011920216084> Bu Tablo Her Ay Güncellenir\n\n<a:yklenme:825679011920216084> \`s!youtube\`\nArkadaşlarınızla Beraber Video İzleyin Diye Getirilmiştir\n\n<a:yklenme:825679011920216084> \`s!spam-sistemi\`\nSunucunuda Spama Önlem Almanız İçin Getirildi\n\n<a:yklenme:825679011920216084> \`s! (yazı)\`\Darkwill Yazışırsınız Aman Dikkat Prefixi İle Yazı Arasında Boşluk Bırakın Ve (İ-Ö-Ç-Ğ-Ü) Vb Harflerle Yazmayın Cevap Vermez**`

    )

    .setThumbnail(

      ""

    );

  return message.channel.send(fynxcode);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["yenilikler"],

  permLevel: 0

};

exports.help = {

  name: "yenilikler",

  description: "Davet Menüsü",

  usage: ""

};