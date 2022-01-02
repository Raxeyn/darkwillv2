let database = require("quick.db");

exports.run = async (client, message) => {

  if (!message.member.hasPermission(`ADMINISTRATOR`))

    return message.channel.send(

      `<a:reddetmek:825688868107059201> Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`

    );

  let rol = message.mentions.roles.first();

  if (!rol)

    return message.channel.send(

      `<a:reddetmek:825688868107059201> **Bir Rol Etiketlemen Gerekmekte \n > Örnek: __${process.env.prefix}abone-yetkili-rol @rol__**`

    );

  database.set(`aboneyetkilisi.${message.guild.id}`, rol.id);

  message.channel.send(

    `<a:onaylamak:825688895286280232> **Abone yetkilisi başarıyla "${rol}" olarak ayarlandı.**`

  );

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["abone-y-rol", "abone-yetkili-rol"],

  perm: 0

};

exports.help = {

  name: "abone-yetkili"

};

exports.play = {

  kullanım: "y!abone-y-rol @rol",

  açıklama: "Abone Yetkili Rolünü Ayarlarsınız",

  kategori: "Abone"

};

