const Discord = require("discord.js");

const db = require("quick.db");

let prefix = process.env.prefix;

exports.run = async (client, message, args) => {

  let CEKişi = message.mentions.users.first();

  let CESebep = args.slice(1).join(" ") || "Belirtilmemiş";

  let CELog = db.fetch("cbanlog." + message.guild.id);

  let CEYetkili = db.fetch("banyetkili." + message.guild.id);

  if (!CEYetkili) return message.channel.send("<a:reddetmek:825688868107059201> Ban Yetkili Sistemi Ayarlanmamış");

  if (!CELog) return message.channel.send("<a:reddetmek:825688868107059201> Ban Log Listemi Ayarlanmamış");

  if (!message.member.roles.cache.has(CEYetkili))

    return message.channel.send(`<a:reddetmek:825688868107059201> <@${message.author.id}> Ban Yetkin Olmadan Kullanamazsın`);

  if (!CEKişi)

    return message.channel.send(

      new Discord.MessageEmbed()

        .setColor("#00ff00")

        .setDescription(`<a:reddetmek:825688868107059201> Banlanacak Kişiyi Etiketle \n > Doğru Kullanım \`${prefix}ban @Kişi <Sebep>\``)

    );

  if (

    !message.guild.members.cache

      .get(client.user.id)

      .hasPermission("BAN_MEMBERS")

  )

    return message.channel.send("<a:reddetmek:825688868107059201> Botta Ban Yetkisi Yok ");

  await message.guild.members.ban(CEKişi.id, { reason: CESebep });

  await message.guild.channels.cache

    .get(CELog)

    .send(

      "<a:onaylamak:825688895286280232> <@" +

        CEKişi.id +

        "> Kişisi <@" +

        message.author.id +

        "> Kişisi Tarafından \`" +

        CESebep +

        "\` Sebebi İle Başarı İle Banalandı"

    );

  return message.channel.send(

    "<a:onaylamak:825688895286280232> <@" +

      CEKişi.id +

      "> Kişisi <@" +

      message.author.id +

      "> Kişisi Tarafından \`" +

      CESebep +

      "\` Sebebi İle Başarı İle Banlandı"

  );

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: "ban",

  description: "",

  usage: ""

};

