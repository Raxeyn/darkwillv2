const Discord = require("discord.js");

const db = require("quick.db");

exports.run = (client, message, args) => {

  let rol = message.mentions.roles.first();

  let kanal = message.mentions.channels.first();

  if (!message.member.hasPermission("ADMINISTRATOR"))

    return message.channel.send(

      `<a:reddetmek:825688868107059201> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`

    );

  if (!rol)

    return message.channel.send(

      new Discord.MessageEmbed().setColor("#00ff00").setDescription(`

Ayarlamam İçin Bir Rol Etiketlemeilisin. 

Rolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma**

Örnek Kullanım : s!otorol-ayarla @rol #kanal 

Önemli Not : Oto Rol Vermem İçin Verilecek Rolün Üstünde Bir Rolüm Olmalı Yoksa Rolü Veremem

 `)

    );

  if (!kanal)

    return message.channel.send(`

 Ayarlamam İçin Bir Kanal Etiketlemeilisin.

`);

  message.channel.send(`╔▬▬▬▬▬▬▬▬Otorol▬▬▬▬▬▬▬▬▬

║► <a:onaylamak:825688895286280232> Otorol Aktif Edildi.

║► <<a:onaylamak:825688895286280232> **${rol}** Olarak Güncelledim! 

║► <a:onaylamak:825688895286280232> Kayıt Kanalını **${kanal}** Olarak Güncelledim! 

╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

  db.set(`otoRL_${message.guild.id}`, rol.id);

  db.set(`otoRK_${message.guild.id}`, kanal.id);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: "otorol-ayarla",

  description: "taslak",

  usage: "otorol-ayarla"

};

