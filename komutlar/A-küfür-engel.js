exports.run = (client, message) => {

  let db = require("quick.db");

  let Discord = require("discord.js");

  let küfür = db.fetch(`küfür.${message.guild.id}.durum`);

  const member3 = new Discord.MessageEmbed()

    .setColor("#00ff00")

    .setDescription(`<a:reddetmek:825688868107059201>  - Bu sunucuda yetkili değilsin.`);

  if (!message.member.permissions.has("MANAGE_MESSAGES"))

    return message.channel.send(member3);

  if (küfür) {

    db.delete(`küfür.${message.guild.id}`);

    message.channel

      .send(

        new Discord.MessageEmbed()

          .setColor("#00ff00")

          .setDescription(

            `**<a:onaylamak:825688895286280232> Başarılı Bir Şekilde KüfürEngel Koruması Kapatıldı**`

          )

      )



  } else {

    db.set(`küfür.${message.guild.id}.durum`, true);

    message.channel

      .send(

       new Discord.MessageEmbed()

          .setColor("#00ff00")

          .setDescription(` **<a:onaylamak:825688895286280232> Başarılı Bir Şekilde KüfürEngel Koruma Açıldı**`)

      )


  }

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["küfür-engel"],

  permLevel: 0

};

exports.help = {

  name: "küfürengel",

  description: "sa",

  usage: "anan"

};

