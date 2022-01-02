const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  if (!message.guild)

    return message.author.send(

      "Bu Komutu Sadece Sunucularda Kulanabilirsiniz!"

    );

  let güvenlik = ["Zayıf","Orta","Yüsek"]

  const say = new Discord.MessageEmbed()

    .setColor("RANDOM")

    .setImage(

      ""

    )

    .setTitle(message.guild.name)

    .addField(

      "<a:Discord:737981764919754753> **__Toplam Üye Sayısı__**",

      `\`\`\`${message.guild.memberCount}\`\`\``

    )

    .addField(

      `<a:Discord:737981764919754753> **__Toplam Kanal Sayısı__**`,

      `  \`\`\`${message.guild.channels.cache.size}\`\`\``

    )

    .addField(

      "<a:Discord:737981764919754753> **__Çevrimiçi üye sayısı__**",

      `» ${

        message.guild.members.cache.filter(

          m => m.user.presence.status !== "offline"

        ).size

      }`

    )

    .addField(

      "<a:Discord:737981764919754753> **__Çevrimdışı üye sayısı__**",

      `» ${

        message.guild.members.cache.filter(

          m => m.user.presence.status == "offline"

        ).size

      }`

    )

    .addField(

      "<a:Discord:737981764919754753> **__Bot Sayısı__**",

      `» ${message.guild.members.cache.filter(m => m.user.bot).size}`

    )

    .addField(

      `<a:Discord:737981764919754753> **__Emoji Sayısı__**`,

      `» **${message.guild.emojis.cache.size}**`

    )

    .addField(

      `<a:Discord:737981764919754753> **__Rol Sayısı__**`,

      `» **${message.guild.roles.cache.size}**`

    )

    .addField(`<a:Discord:737981764919754753> **__Boost Seviyesi__**`,`**${message.guild.premiumTier}/3**`)

    .addField(

      `<a:Discord:737981764919754753> **__Boost Sayısı__**`,

      `» **${message.guild.premiumSubscriptionCount}**`

    )

  message.channel.send(say);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["say"],

  permLevel: 0

};

exports.help = {

  name: "gelişmiş-say",

  description: "Say"

};

