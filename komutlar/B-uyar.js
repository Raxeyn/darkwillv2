const Discord = require('discord.js')

const data = require('quick.db')

////////////////////////////////////

exports.run = async (client, message, args) => { 

let uyarilog = data.fetch(`uyarilog_${message.guild.id}`)

if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("**<a:reddetmek:825688868107059201> Bunu yapmak için `Üyeleri At` yetkisine ihtiyacın var**")

if(!args[0]) return message.channel.send(`**<a:reddetmek:825688868107059201> Yanlış Kullanım Doğrusu** '/s!uyar |Etiket| |Sebep|/' `)

let kullanıcı = message.mentions.users.first()

if(!args[0]) return message.reply("<a:reddetmek:825688868107059201> Lütfen bir üye etiketle ")

if(!kullanıcı) return message.reply(`<a:reddetmek:825688868107059201> Kullanıcı Sunucuda Bulunamadı (` + args[0] + `)`)

if(kullanıcı.bot) return message.reply(`<a:reddetmek:825688868107059201> Botları uyaramazsın, sadece kullanıcılar `) 

if(kullanıcı.id === message.author.id) return message.reply(`<a:reddetmek:825688868107059201> Kendini uyaramazsın,başka bir kullanıcı etiketle`)

 if(kullanıcı.permissions <= client.permissions) return message.reply("**<a:reddetmek:825688868107059201> Yetkili üyeleri uyaramam**");

data.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, +1)

const syı = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)

let reason = args.slice(1).join(' ')

if(!reason) {

await message.channel.send(new Discord.MessageEmbed()

                          .setColor("#f9ff00")

                          .setAuthor(kullanıcı.tag + " Uyarıldı")

                          .setDescription("**Sebep:** Belirtilmedi"))

if(uyarilog) {

  message.guild.channels.cache.get(uyarilog.id).send(new Discord.MessageEmbed()

                          .setColor("YELLOW")

                          .setTitle("Darkwill Genel | Uyarı Sistemi")

                          .setDescription(`**${kullanıcı}** kullanıcısı **${message.author.tag}** tarafından **sebepsizce** uyarıldı!`)

                          .setTimestamp())

}

return

}

if(reason) {

await message.channel.send(new Discord.MessageEmbed()

                          .setColor("#f9ff00")

                          .setAuthor(kullanıcı.tag + " Uyarıldı")

                          .setDescription("**Sebep:** "+ reason))

if(uyarilog) {

  message.guild.channels.cache.get(uyarilog.id).send(new Discord.MessageEmbed()

                          .setColor("YELLOW")

                          .setTitle("Darkwill Genel | Uyarı Sistemi")

                          .setDescription(`**${kullanıcı}** kullanıcısı **${message.author.tag}** tarafından **${reason}** sebebiyle uyarıldı!`)

                          .setTimestamp())

}

  return

} 

}

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: ["warn"],

    permLevel: 0

};

exports.help = {

    name: 'uyar',

};