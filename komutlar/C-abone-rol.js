let database = require("quick.db");

exports.run = async (client, message) => {

  if (!message.member.hasPermission(`ADMINISTRATOR`))

    return message.channel.send(

      `<a:reddetmek:825688868107059201> Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`

    );

  let rol = message.mentions.roles.first();

  if (!rol)

    return message.channel.send(

      `<a:reddetmek:825688868107059201> **Bir Rol Etiketlemen Gerekmekte \n > Örnek: __${process.env.prefix}abone-rol @rol__**`

    );

  database.set(`abonerol.${message.guild.id}`, rol.id);

  message.channel.send(

    `<a:onaylamak:825688895286280232> **Abone rolü başarıyla "${rol}" olarak ayarlandı.**`

  );

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["abone-rol", "a-rol"],

  perm: 0

};

exports.help = {

  name: "abonerol"

};

exports.play = {

  kullanım: "y!abonerol @rol",

  açıklama: "Abone Rolünü Ayarlarsınız",

  kategori: "Abone"

};

