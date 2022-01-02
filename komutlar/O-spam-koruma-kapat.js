const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply('<a:reddetmek:825688868107059201> Bu komutu kullanabilmek için **Yönetici** olmalısın!')
const sistem = await data.fetch(`spam.${message.guild.id}`);
if(!sistem) return message.channel.send(nn.setDescription(`<a:reddetmek:825688868107059201> Spam koruma zaten aktif değil.`))

data.delete(`spam.${message.guild.id}`);
return message.channel.send(nn.setTitle(`<a:onaylamak:825688895286280232> İşlem başarılı!`).setColor(0x36393F).setDescription(`<a:ayar:825679362518417459> Spam koruma başarıyla kapatıldı.`))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['spamkapat', 'spam-koruma-kapat', 'spam-korumakapat', 'spamkoruma-kapat'],
  permLevel: 0
}

exports.help = {
  name: 'spam-kapat'
};