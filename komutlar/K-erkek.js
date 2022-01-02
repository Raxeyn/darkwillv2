const discord = require('discord.js')

const db = require('quick.db')

exports.run = async(client, message, args) => {

let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)

let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)

let erkekrol = db.fetch(`erkekrol_${message.guild.id}`)

let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)

 

if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`<a:reddetmek:825688868107059201> Bu komudu kullanabilmen için <@&${kayıtçı}> adlı role sahip olman lazım!`)

if(message.channel.id !== kanal) return message.channel.send(`<a:reddetmek:825688868107059201> Bu komudu sadece <#${kanal}> adlı kanalda kullanabilirsin!`)

if (!erkekrol) return message.channel.send(`<a:reddetmek:825688868107059201> Sunucuda erkek rolü ayarlanmadığı için komut kullanılamaz!`)

let member = message.mentions.members.first();

if (!member) return message.channel.send(`<a:reddetmek:825688868107059201> Erkek olarak kayıt edeceğin kullanıcıyı belirtmelisin!`)

let isim = args[1]

if (!isim) return message.channel.send(`<a:reddetmek:825688868107059201> İsmini belirtmelisin!`)

let yaş = args[2]

if (!yaş) return message.channel.send(`<a:reddetmek:825688868107059201> Yaşını belirtmelisin!`)

member.setNickname(`${isim} | ${yaş}`)

member.roles.remove(alınacakrol)

member.roles.add(erkekrol)

const başarılı = new discord.MessageEmbed()

.setAuthor(client.user.username, client.user.avatarURL())  

.setTitle(`${client.user.username} | Erkek Kayıt`)

.setColor(0x36393F)

.setDescription(`<a:B_Yildiz:825644101985894400> Erkek olarak kayıt edilen kullanıcı: ${member} \n<a:aa:774263704098308136> Erkek olarak kayıt eden yetkili: <@!${message.author.id}>`)

.addField(`<a:onaylamak:825688895286280232> Kullanıcının ismi:`, `${isim}`, true)

.addField(`<a:onaylamak:825688895286280232> Kullanıcının yaşı:`, `${yaş}`, true)

.setThumbnail(member.avatarURL)

.setFooter(`Darkwill`)

message.channel.send(başarılı)

db.add(`kayıtsayı_${message.author.id}`, 1)

}

exports.conf = {

  enabled: true,

  guildonly: false,

  aliases: ['e'],

  permlevel: 0

}

exports.help = {

  name: 'erkek',

  description: 'erkek olarak kayıt eder',

  usage: 'dr!erkek @kullanıcı isim yaş'

}