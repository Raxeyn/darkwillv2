let database = require("quick.db");

exports.run = async (client, message) => {

  if (!message.member.hasPermission(`ADMINISTRATOR`))

    return message.channel.send(

      `<a:reddetmek:825688868107059201> Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`

    );

  let log = message.mentions.channels.first();

  if (!log)

    return message.channel.send(

      `<a:reddetmek:825688868107059201> **Bir Kanal Etiketlemen Gerekmekte \n > Örnek __${process.env.prefix}abone-log #kanal__**`

    );

  database.set(`abonelog.${message.guild.id}`, log.id);

  message.channel.send(

    `<a:onaylamak:825688895286280232> **Abone kanalı başarıyla "${log}" olarak ayarlandı.**`

  );

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["abone-log", "a-log"],

  perm: 0

};

exports.help = {

  name: "abonelog"

};

exports.play = {

  kullanım: "abonelog #kanal",

  açıklama: "Abone Logunu Ayarlarsınız",

  kategori: "Abone"

};

