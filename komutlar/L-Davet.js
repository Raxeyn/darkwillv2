const Discord = require("discord.js");

exports.run = async (client, message) => {

  let prefix = process.env.prefix;

  const fynxcode = new Discord.MessageEmbed()

    .setColor("#00ff00")

    .setAuthor(`Darkwill Davet Menüsü`)

    .setDescription(

      `**<a:Discord:737981764919754753> __Botu Davet Etmek İçin__ --> [TIKLA](https://discord.com/api/oauth2/authorize?client_id=616282328905416727&permissions=8&scope=bot) <--**\n\n**<a:Discord:737981764919754753> __Botun Destek Sunucusu__ --> [TIKLA](https://discord.gg/t4E6JwXVqP) <--**`

    )

    .setThumbnail(

      ""

    );

  return message.channel.send(fynxcode);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["davet"],

  permLevel: 0

};

exports.help = {

  name: "davet",

  description: "Davet Menüsü",

  usage: ""

};