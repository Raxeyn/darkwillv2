const Discord = require("discord.js");

exports.run = async (client, message) => {

  let prefix = process.env.prefix;

  const botbilgi = new Discord.MessageEmbed()

    .setAuthor(`Darkwill | Discord Bot İstatistikleri`)

    .setTitle(``)

    .setColor("RANDOM")

    .setThumbnail(

      ""    )

    .setDescription(

      `<a:Discord:737981764919754753> CrazyBot İstatistik Menüsüne Hoşgeldiniz <a:Discord:737981764919754753>
`

    )

    .addField(

      "__**Darkwill Verileri**__",

      `<a:Discord:737981764919754753>  **Toplam Sunucu Sayısı** **|**  \`${

        client.guilds.cache.size

      }\` \n <a:Discord:737981764919754753>  **Toplam Kullanıcı Sayısı** **|** \`${client.guilds.cache

        .reduce((a, b) => a + b.memberCount, 0)

        .toLocaleString()}\` \n <a:Discord:737981764919754753>  **Toplam Kanal Sayısı** **|** \`${

        client.channels.cache.size

      }\``

    )

    .addField(

      "**__Darkwill Yapımcısı__**",

      "<a:Discord:737981764919754753>  **Darkwill Sahip**  \n **<a:yneticim:927110927776632832>  Yapımcım : **<@408496730644938752> \n **» 🖤ʙʟᴀᴄᴋ ғʟᴏᴡᴇʀ🥀#6887** \n\n "

    )

    .addField(

      "__**Darkwill Sürümler**__",

      `<a:Discord:737981764919754753>   **Discord.js Sürümü** **|**  \`v13.5.1\` \n <a:Discord:737981764919754753> **Node.js Sürümü** **|**  \`v12.5.1\``

    )


    .addField(

      `**__Bilgi__**`,

      `<a:Discord:737981764919754753> Yapımcım : <@408496730644938752> \n<a:Discord:737981764919754753> Sürümüm : v13`

    ); 

  

  return message.channel.send(botbilgi);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["botbilgi", "istatistik", "i"],

  permLevel: 0

};

exports.help = {

  name: "botbilgi",

  description: "",

  usage: "botbilgi, i, istatistik"

};