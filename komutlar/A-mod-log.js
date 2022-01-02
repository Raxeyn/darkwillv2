const Discord = require("discord.js");

const db = require("quick.db");

let prefix = process.env.prefix;

exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR"))

    return message.channel.send(

      `<a:reddetmek:825688868107059201> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`

    );

  let logk = message.mentions.channels.first();

  let logkanal = await db.fetch(`log_${message.guild.id}`);

  if (args[0] === "sıfırla" || args[0] === "kapat") {

    if (!logkanal)

      return message.channel.send(

        new Discord.MessageEmbed()

          .setColor("#00ff00")

          .setDescription(`<a:reddetmek:825688868107059201> ModLog Kanalı Zaten Ayarlı Degil.`)

      );

    db.delete(`log_${message.guild.id}`);

    message.channel.send(

      new Discord.MessageEmbed()

        .setColor("#00ff00")

        .setDescription(

          `<a:onaylamak:825688895286280232> | Mod-log kanalı başarıyla sıfırlandı.`

        )

    );

    return;

  }

  if (!logk)

    return message.channel.send(

      new Discord.MessageEmbed()

        .setColor("#00ff00")

        .setDescription(

          `<a:reddetmek:825688868107059201> Yanlış Kullanım \n Doğru Kullanım: ${prefix}mod-log #kanal`

        )

    );

  db.set(`log_${message.guild.id}`, logk.id);

  message.channel.send(

    new Discord.MessageEmbed()

      .setColor("#00ff00")

      .setDescription(`<a:onaylamak:825688895286280232> Mod-log kanalı başarıyla ${logk} olarak ayarlandı.`)

  );

  message.react("<a:loading:837990620198207498>");

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["mod-log", "modlog", "log-ayarlama"],

  permLevel: 3,

  kategori: "moderasyon"

};

exports.help = {

  name: "mod-log",

  description: "Mod-Log kanalını belirler.",

  usage: "mod-log <#kanal>"

};

