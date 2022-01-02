const Discord = require("discord.js");

const db = require("quick.db");

exports.run = (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR"))

    return message.channel.send(

      `<a:reddetmek:825688868107059201> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`

    );

    let mesaj = args.slice(0).join(" ");

    if (mesaj.length < 5)

      return message.channel.send(

        new Discord.MessageEmbed()

               .setColor("#00ff00")

         .setDescription(

          "<a:reddetmek:825688868107059201> Otorol Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin. Örnek: `c!otorol-msg -uye- Hoşgeldin! senle beraber -uyesayisi- Kişiyiz!`"

           )

      );

    message.channel.send(

        "<a:onaylamak:825688895286280232> Oto-Rol mesajını `" +

        mesaj +

        "` Olarak ayarladım."

    );

    db.set(`otoRM_${message.guild.id}`, mesaj);

  }

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["oto-rol-msg"],

  permLevel: 0

};

exports.help = {

  name: "otorol-msg",

  description: "taslak",

  usage: "sayac-hg-msg"

};

