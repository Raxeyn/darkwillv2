let Discord = require("discord.js");

let database = require("quick.db");

exports.run = async (client, message, args) => {

  let aboneyetkilisi = await database.fetch(

    `aboneyetkilisi.${message.guild.id}`

  );

  let abonelog = await database.fetch(`abonelog.${message.guild.id}`);

  let abonerol = await database.fetch(`abonerol.${message.guild.id}`);

  let abonekisi = message.guild.member(

    message.mentions.users.first() || message.guild.members.cache.get(args[0])

  );

  if (!abonerol)

    return message.channel.send(

      `<a:reddetmek:825688868107059201> **Abone Rolü Ayarlanmamış Ayarlamak İçin / c!abone-rol @rol **`

    );

  if (!abonelog)

    return message.channel.send(

      `<a:reddetmek:825688868107059201> **Abone Logu Ayarlanmamış Ayarlamak İçin / c!abone-log #log-kanalı **`

    );

  if (!aboneyetkilisi)

    return message.channel.send(

      `<a:reddetmek:825688868107059201> **Abone Rolü Vericek Yetkili Rolü Ayarlanmamış Ayarlamak İçin / c!abone-yetkili-rol @rol **`

    );

  let user = message.mentions.users.first();

  if (!message.member.roles.cache.has(aboneyetkilisi))

    return message.channel.send(

      `**<a:reddetmek:825688868107059201> Bu Komutu Kullanabilmen İçin Belirlenen Role Sahip Olman Gerekmektedir **`

    );

  if (!message.mentions.users.first())

    return message.channel.send(`**<a:reddetmek:825688868107059201> Abone Rol Verebilmen İçin Bir Kullanıcıyı Etiketlemen Lazım Lütfen Birini Etiketler Misin ?**`);

  await abonekisi.roles.add(abonerol);

  const embed = new Discord.MessageEmbed()

    .setTitle(`**<a:onaylamak:825688895286280232> Abone Rolü Verildi!**`)

    .addField(

      `**<a:aa:774263704098308136> Abone Rolünü Veren Kişi:**`,

      `<@${message.author.id}>`,

      true 

    )

    .addField(

      `**\n<a:aa:774263704098308136> Abone Rolü Verilen Kişi:**`,

      `${user}`,

      true

    )

       .setColor("RANDOM")

  message.guild.channels.cache.get(abonelog).send(embed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["abone", "a"],

  perm: 0

};

exports.help = {

  name: "a"

};

exports.play = {

  kullanım: "!abone-y-rol @rol",

  açıklama: "Abone Yetkili Rolünü Ayarlarsınız",

  kategori: "Abone"

};

