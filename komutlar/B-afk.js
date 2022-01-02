const db = require("quick.db");

const Discord = require("discord.js");

let prefix = process.env.prefix;

 

exports.run = function(client, message, args) {

  var USER = message.author;

  var REASON = args.slice(0).join("  ");

  const embed = new Discord.MessageEmbed()

  .setColor("#RANDOM")

  .setAuthor(message.author.username, message.author.avatarURL)

  .setDescription(`<a:reddetmek:825688868107059201> Afk Olmak İçin Bir Sebep Belirtin.\n\n Örnek Kullanım : ${prefix}afk <sebep>`)

  if(!REASON) return message.channel.send(embed)

  db.set(`afk_${USER.id}`, REASON);

  db.set(`afk_süre_${USER.id}`, Date.now());

  const afk = new Discord.MessageEmbed()

  .setColor("#RANDOM")

  .setAuthor(message.author.username, message.author.avatarURL)

  .setDescription(`<a:onaylamak:825688895286280232> Başarıyla ${REASON} Sebebiyle \`Afk\` Moduna Başarıyla Girildi.`)

  message.channel.send(afk)

 

};

 

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: [],

  permLevel: 0

};

 

exports.help = {

  name: 'afk',

  description: 'afk komutu',

  usage: 'afk'

};