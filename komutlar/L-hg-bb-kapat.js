const Discord = require("discord.js");

const db = require("quick.db");

const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_GUILD"))

    return message.reply(

      `<a:reddetmek:825688868107059201> Bu komutu kullanabilmek için **Sunucuyu Yönet** iznine sahip olmalısın!`

    );

  

  let prefix = ayarlar.prefix;

  if (db.has(`gçkanal_${message.guild.id}`) === false) {

    const embed = new Discord.MessageEmbed()

      .setDescription(`<a:reddetmek:825688868107059201> Giriş çıkışı Ayarlamadığın İçin Sıfırlayamazsın!`)

      .setColor("RED")

      .setTimestamp(`<a:reddetmek:825688868107059201> Ayarlamak İçin ${prefix}hg-bb-ayarla #kanal`);

    message.channel.send(embed);

    return;

  }

  db.delete(`gçkanal_${message.guild.id}`);

  const embed = new Discord.MessageEmbed()

    .setDescription(`<a:onaylamak:825688895286280232> Giriş Çıkış Başarıyla Sıfırlandı`)

    .setColor("RANDOM")

    .setTimestamp();

  message.channel.send(embed);

  return;

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["hg-bb-kapat"],

  permLevel: 0

};

exports.help = {

  name: "giriş-çıkış-kapat",

  description: "Giriş çıkışı kapatır",

  usage: "giriş-çıkış-kapat"

};