const discord = require('discord.js')

const db = require('quick.db')

exports.run = async(client, message, args) => {

    

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:reddetmek:825688868107059201> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

if(args[0] === "sıfırla") {

const sıfırlandı = new discord.MessageEmbed()

.setAuthor(client.user.username, client.user.avatarURL)  

.setTitle(`${client.user.username} | Kayıt kanal sıfırlama komutu.`)

.setColor(0x36393F)

.setDescription(`<a:onaylamak:825688895286280232> Kayıt olunacak kanal başarıyla sıfırlandı!`)

.setThumbnail(client.user.avatarURL)

.setFooter(`Darkwill`)

message.channel.send(sıfırlandı)

db.delete(`kayıtkanal_${message.guild.id}`)

return;

}

let kanal = message.mentions.channels.first();   

if (!kanal) {

  const ayarlanmadı = new discord.MessageEmbed()

.setAuthor(client.user.username, client.user.avatarURL())  

.setTitle(`${client.user.username} | Kayıt kanal ayarlama komutu.`)

.setColor(0x36393F)

.setDescription(`<a:reddetmek:825688868107059201> Kayıt olunacak kanalı belirtiniz!`)

.setThumbnail(client.user.avatarURL())

.setFooter(`Darkwill`)

message.channel.send(ayarlanmadı)

}

db.set(`kayıtkanal_${message.guild.id}`, kanal.id)

const ayarlandı = new discord.MessageEmbed()

.setAuthor(client.user.username, client.user.avatarURL())  

.setTitle(`${client.user.username} | Kayıt kanal ayarlama komutu.`)

.setColor(0x36393F)

.setDescription(`<a:onaylamak:825688895286280232> Kayıt olunacak kanal ${kanal} olarak ayarlandı!`)

.setThumbnail(client.user.avatarURL())

.setFooter(`Darkwill`)

message.channel.send(ayarlandı)

  

}

exports.conf = {

  enabled: true,

  guildonly: false,

  aliases: ['kayıtkanal', 'kkanal', 'k-kanal'],

  permlevel: 0

}

exports.help = {

  name: 'kayıt-kanal',

  description: 'Kayıt Olunacak Kanalı Ayarlar',

  usage: 'dr!kayıt-kanal #kanal'

}