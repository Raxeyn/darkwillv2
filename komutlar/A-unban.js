const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

  const permError = new Discord.MessageEmbed()

    .setColor('RANDOM')

      .setTitle('Hata')

        .setDescription('<a:reddetmek:825688868107059201> Bu Komutu Kullanmak İçin "Üyeleri Yasakla" Yetkisine Sahip Olmalısın')

  const userError = new Discord.MessageEmbed()

    .setColor('RNADOM')

      .setTitle('Hata')

        .setDescription('<a:reddetmek:825688868107059201> Yasağı kaldırmak için bir kullanıcı kimliği girmelisiniz !unban İD')

  const userError2 = new Discord.MessageEmbed()

    .setColor('#ed455a')

      .setTitle('Hata')

        .setDescription("<a:reddetmek:825688868107059201> ID'de Harf Kullanılanamaz")

  const userError3 = new Discord.MessageEmbed()

    .setColor('#ed455a')

      .setTitle('Hata')

        .setDescription('<a:reddetmek:825688868107059201> Bu Kullanıcı Yasaklanmamış')

  const levelError = new Discord.MessageEmbed()

    .setColor('#ed455a')

      .setTitle('Hata')

        .setDescription('<a:reddetmek:825688868107059201> Sizinle aynı veya daha yüksek bir role sahip bir üyenin yasağını kaldırmazsınız')

  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send

        (permError).then(message.delete()).then(codework => codework.delete({timeout: 5000}))

  let user = args[0];

    if  (!user) return message.channel.send

          (userError).catch(console.error).then(message.delete()).then(codework => codework.delete({timeout: 5000}))

  if  (isNaN(args[0])) return message.channel.send

        (userError2).catch(console.error).then(message.delete()).then(codework => codework.delete({timeout: 5000}))

  if  (user.highestRole >= message.author.highestRole) return message.channel.send

          (levelError).then(message.delete()).then(codework => codework.delete({timeout: 5000}))

  const banList = await message.guild.fetchBans();

  if (!user.id === banList) return message.channel.send

      (userError3).then(message.delete()).then(codework => codework.delete({timeout: 5000}))

  

  message.guild.members.unban(user);

message.channel.send(`<a:onaylamak:825688895286280232> <@!${user}> Adlı Kullanıcının Yasağı Başarıyla Kaldırıldı.`)

  }

  exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: [],

    permLevel: 0,

        kategori: "Yetkili"

  };

  exports.help = {

    name: 'unban',

    description: 'İstediğiniz kişinin banını kaldırır.',

    usage: 'unban [kullanıcı] [sebep]'

  };