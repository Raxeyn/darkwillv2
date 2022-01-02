const laury = require('discord.js')

exports.run = function(client, message, args) {

const embed = new laury.MessageEmbed()

.setTimestamp()

.setFooter(``)

.addField(`<a:pck:832167977721397299> **Botta Bulunan Komut Sayısı**`,`**Toplamda ${client.commands.size} Adettir.**`)

  message.channel.send(embed)

  

  

};

exports.conf = {

    enabled: false,

    guildOnly: false,

    aliases: ["toplam-komut","komut-sayısı","komutsayısı","tk"],

    permLevel: 0

  };

  

  exports.help = {

    name: 'toplam-komut'

  };