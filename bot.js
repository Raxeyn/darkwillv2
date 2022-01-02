const discord = require('discord.js');
const fs = require('fs');
const { readdirSync } = require("fs");
const db = require('quick.db');
const moment = require('moment');
const http = require('http');
const ayarlar = require('./ayarlar.json');
const { join } = require("path");
const { prefix } = require("./ayarlar.json");
const express = require('express');
const request = require("request");

const app = express();
app.get("/", (request, response) => {
response.send("👑 Darkwill v13 Aktif");
});
app.listen(process.env.PORT);


//CrazyBot Ready

const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', async () => {
   client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);

 
   client.user.setActivity(`👑 Darkwill | s!yardım`, {
    type: "STREAMING",
    url: "https://www.twitch.tv/"
    });

        console.log ('_________________________________________');
      console.log (`👑 Bot İsmi     : ${client.user.username}`);
      console.log (`⚡ Sunucu Sayısı          : ${client.guilds.cache.size}`);
      console.log (`🙎‍♂️ Kullanıcı Sayısı       : ${client.users.cache.size}`);
      console.log (`👌 Prefix             : ${process.env.prefix}`);
      console.log (`🌙 Durum              : Bakımda`);
      console.log ('_________________________________________');

});

const log = message => {
  console.log(` ${message}`);
  
  
};
require('./util/eventLoader.js')(client);

//CrazyBot Ready Son

//CrazyBot Komut Algılayıcı

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
           reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

//CrazyBot Komut Algılayıcı Son

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

client.login(process.env.TOKEN)

//-----------------------KOMUTLAR-----------------------\\

///CrazyBot Selam

client.on('message', async (msg, member, guild) => {

  

let i = await  db.fetch(`saas_${msg.guild.id}`)

if(i === 'açık') {

  

if (msg.content.toLowerCase() === 'sa'){

          

msg.reply('**<a:panda:839957401771966545> Aleyküm Selam Hoşgeldin <a:panda:839957401771966545>**');    

}

  

}

});

///CrazyBot Selam Son

//CrazyBot Küfür Engel

const küfür = [

  "siktir",

  "fuck",

  "puşt",

  "pust",

  "piç",

  "sikerim",

  "sik",

  "yarra",

  "yarrak",

  "amcık",

  "orospu",

  "orosbu",

  "orosbucocu",

  "oç",

  ".oc",

  "ibne",

  "yavşak",

  "bitch",

  "dalyarak",

  "amk",

  "awk",

  "taşak",

  "taşşak",

  "daşşak",

  "sikm",

  "sikim",

  "sikmm",

  "skim",

  "skm",

  "sg"

];

client.on("messageUpdate", async (old, nev) => {

  if (old.content != nev.content) {

    let i = await db.fetch(`küfür.${nev.member.guild.id}.durum`);

    let y = await db.fetch(`küfür.${nev.member.guild.id}.kanal`);

    if (i) {

      if (küfür.some(word => nev.content.includes(word))) {

        if (nev.member.hasPermission("BAN_MEMBERS")) return;

        //if (ayarlar.gelistiriciler.includes(nev.author.id)) return ;

        const embed = new Discord.MessageEmbed()

          .setColor("#00ff00")

          .setDescription(

            ` ${nev.author} , **Mesajını editleyerek küfür etmeye çalıştı!**`

          )

          .addField("Mesajı:", nev);

        nev.delete();

        const embeds = new Discord.MessageEmbed()

          .setColor("#00ff00")

          .setDescription(

            `<a:reddetmek:825688868107059201> ${nev.author} , ** Mesajı editleyerek küfür etmene izin veremem!**`

          );

        client.channels.cache.get(y).send(embed);

        nev.channel.send(embeds).then(msg => msg.delete({ timeout: 5000 }));

      }

    } else {

    }

    if (!i) return;

  }

});

client.on("message", async msg => {

  if (msg.author.bot) return;

  if (msg.channel.type === "dm") return;

  let y = await db.fetch(`küfür.${msg.member.guild.id}.kanal`);

  let i = await db.fetch(`küfür.${msg.member.guild.id}.durum`);

  if (i) {

    if (küfür.some(word => msg.content.toLowerCase().includes(word))) {

      try {

        if (!msg.member.hasPermission("MANAGE_GUILD")) {

          //  if (!ayarlar.gelistiriciler.includes(msg.author.id)) return ;

          msg.delete({ timeout: 750 });

          const embeds = new Discord.MessageEmbed()

            .setColor("#00ff00")

            .setDescription(

              `<a:reddetmek:825688868107059201> <@${msg.author.id}> , **Bu sunucuda küfür yasak!**`

            );

          msg.channel.send(embeds).then(msg => msg.delete({ timeout: 5000 }));

          const embed = new Discord.MessageEmbed()

            .setColor("#00ff00")

            .setDescription(` ${msg.author} , **Küfür etmeye çalıştı!**`)

            .addField("Mesajı:", msg);

          client.channels.cache.get(y).send(embed);

        }

      } catch (err) {

        console.log(err);

      }

    }

  }

  if (!i) return;

});

///CrazyBot Küfür Engel Son

///Crazy Oto Rol

client.on("guildMemberAdd", async member => {

  let kanal = await db.fetch(`otoRK_${member.guild.id}`);

  let rol = await db.fetch(`otoRL_${member.guild.id}`);

  let mesaj = db.fetch(`otoRM_${member.guild.id}`);

  if (!rol) return;

  if (!mesaj) {

    client.channels.cache

      .get(kanal)

      .send(

        "<a:onaylamak:825688895286280232> Otomatik Rol Verildi Seninle Beraber `" +

          member.guild.memberCount +

          "` Kişiyiz! Hoşgeldin! `" +

          member.user.username +

          "`"

      );

    return member.roles.add(rol);

  }

  if (mesaj) {

    var mesajs = mesaj

      .replace("-uye-", `${member.user}`)

      .replace("-uyetag-", `${member.user.tag}`)

      .replace("-rol-", `${member.guild.roles.cache.get(rol).name}`)

      .replace("-server-", `${member.guild.name}`)

      .replace("-uyesayisi-", `${member.guild.memberCount}`)

      .replace(

        "-botsayisi-",

        `${member.guild.members.cache.filter(m => m.user.bot).size}`

      )

      .replace("-bolge-", `${member.guild.region}`)

      .replace("-kanalsayisi-", `${member.guild.channels.size}`);

    member.roles.add(rol);

    return client.channels.cache.get(kanal).send(mesajs);

  }

});

///CrazyBot Otorol Son

///CrazyBot Reklam Engel

const reklam = [

  ".com",

  ".net",

  ".xyz",

  ".tk",

  ".pw",

  ".io",

  ".me",

  ".gg",

  "www.",

  "https",

  "http",

  ".gl",

  ".org",

  ".com.tr",

  ".biz",

  "net",

  ".rf",

  ".gd",

  ".az",

  ".party",

  ".gf",

  ".31"

];

client.on("messageUpdate", async (old, nev) => {

  if (old.content != nev.content) {

    let i = await db.fetch(`reklam.${nev.member.guild.id}.durum`);

    let y = await db.fetch(`reklam.${nev.member.guild.id}.kanal`);

    if (i) {

      if (reklam.some(word => nev.content.includes(word))) {

        if (nev.member.hasPermission("BAN_MEMBERS")) return;

        //if (ayarlar.gelistiriciler.includes(nev.author.id)) return ;

        const embed = new Discord.MessageEmbed()

          .setColor("#00ff00")

          .setDescription(

            ` ${nev.author} , **Mesajını editleyerek reklam yapmaya çalıştı!**`

          )

          .addField("Mesajı:", nev);

        nev.delete();

        const embeds = new Discord.MessageEmbed()

          .setColor("#00ff00")

          .setDescription(

            `<a:reddetmek:825688868107059201> ${nev.author} , **Mesajı editleyerek reklam yapamana izin veremem!**`

          );

        client.channels.cache.get(y).send(embed);

        nev.channel.send(embeds).then(msg => msg.delete({ timeout: 5000 }));

      }

    } else {

    }

    if (!i) return;

  }

});

client.on("message", async msg => {

  if (msg.author.bot) return;

  if (msg.channel.type === "dm") return;

  let y = await db.fetch(`reklam.${msg.member.guild.id}.kanal`);

  let i = await db.fetch(`reklam.${msg.member.guild.id}.durum`);

  if (i) {

    if (reklam.some(word => msg.content.toLowerCase().includes(word))) {

      try {

        if (!msg.member.hasPermission("MANAGE_GUILD")) {

          //  if (!ayarlar.gelistiriciler.includes(msg.author.id)) return ;

          msg.delete({ timeout: 750 });

          const embeds = new Discord.MessageEmbed()

            .setColor("#00ff00")

            .setDescription(

              `<a:reddetmek:825688868107059201> <@${msg.author.id}> , **Bu sunucuda reklam yapmak yasak!**`

            );

          msg.channel.send(embeds).then(msg => msg.delete({ timeout: 5000 }));

          const embed = new Discord.MessageEmbed()

            .setColor("#00ff00")

            .setDescription(` ${msg.author} , **Reklam yapmaya çalıştı!**`)

            .addField("Mesajı:", msg);

          client.channels.cache.get(y).send(embed);

        }

      } catch (err) {

        console.log(err);

      }

    }

  }

  if (!i) return;

});

///CrazyBot Reklam Son

///CrazyBot Afk 

const ms = require("parse-ms");

const { DiscordAPIError } = require("discord.js");

client.on("message", async message => {

  if (message.author.bot) return;

  if (!message.guild) return;

  if (message.content.includes(`afk`)) return;

  if (await db.fetch(`afk_${message.author.id}`)) {

    db.delete(`afk_${message.author.id}`);

    db.delete(`afk_süre_${message.author.id}`);

    const embed = new Discord.MessageEmbed()

      .setColor("#00ff00")

      .setAuthor(message.author.username, message.author.avatarURL)

      .setDescription(`${message.author.username} Artık \`AFK\` Değilsin.`);

    message.channel.send(embed);

  }

  var USER = message.mentions.users.first();

  if (!USER) return;

  var REASON = await db.fetch(`afk_${USER.id}`);

  if (REASON) {

    let süre = await db.fetch(`afk_süre_${USER.id}`);

    let timeObj = ms(Date.now() - süre);

    const afk = new Discord.MessageEmbed()

      .setColor("#00ff00")

      .setDescription(

        `**Bu Kullanıcı AFK**\n\n**Afk Olan Kullanıcı :** \`${USER.tag}\`\n**Afk Süresi :** \`${timeObj.hours}saat\` \`${timeObj.minutes}dakika\` \`${timeObj.seconds}saniye\`\n**Sebep :** \`${REASON}\``

      );

    message.channel.send(afk);

  }

});

///CrazyBot Afk Son

///CrazyBot Mod Log

client.on("messageDelete", async message => {

  if (message.author.bot || message.channel.type == "dm") return;

  let log = message.guild.channels.cache.get(

    await db.fetch(`log_${message.guild.id}`)

  );

  if (!log) return;

  const embed = new Discord.MessageEmbed()

    .setTitle(message.author.username + " | Mesaj Silindi")

    .addField("Kullanıcı: ", message.author)

    .addField("Kanal: ", message.channel)

    .addField("Mesaj: ", "" + message.content + "");

  log.send(embed);

});

client.on("messageUpdate", async (oldMessage, newMessage) => {

  let modlog = await db.fetch(`log_${oldMessage.guild.id}`);

  if (!modlog) return;

  let embed = new Discord.MessageEmbed()

    .setAuthor(oldMessage.author.username, oldMessage.author.avatarURL())

    .addField("**Eylem:**", "Mesaj Düzenleme")

    .addField(

      "**Mesajın sahibi:**",

      `<@${oldMessage.author.id}> === **${oldMessage.author.id}**`

    )

    .addField("**Eski Mesajı:**", `${oldMessage.content}`)

    .addField("**Yeni Mesajı:**", `${newMessage.content}`)

    .setTimestamp()

    .setColor("#00ff00")

    .setFooter(

      `Sunucu: ${oldMessage.guild.name} - ${oldMessage.guild.id}`,

      oldMessage.guild.iconURL()

    )

    .setThumbnail(oldMessage.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);

});

client.on("channelCreate", async channel => {

  let modlog = await db.fetch(`log_${channel.guild.id}`);

  if (!modlog) return;

  const entry = await channel.guild

    .fetchAuditLogs({ type: "CHANNEL_CREATE" })

    .then(audit => audit.entries.first());

  let kanal;

  if (channel.type === "text") kanal = `<#${channel.id}>`;

  if (channel.type === "voice") kanal = `\`${channel.name}\``;

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Kanal Oluşturma")

    .addField("**Kanalı Oluşturan Kişi:**", `<@${entry.executor.id}>`)

    .addField("**Oluşturduğu Kanal:**", `${kanal}`)

    .setTimestamp()

    .setColor("#00ff00")

    .setFooter(

      `Sunucu: ${channel.guild.name} - ${channel.guild.id}`,

      channel.guild.iconURL()

    )

    .setThumbnail(channel.guild.iconUR);

  client.channels.cache.get(modlog).send(embed);

});

client.on("channelDelete", async channel => {

  let modlog = await db.fetch(`log_${channel.guild.id}`);

  if (!modlog) return;

  const entry = await channel.guild

    .fetchAuditLogs({ type: "CHANNEL_DELETE" })

    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Kanal Silme")

    .addField("**Kanalı Silen Kişi:**", `<@${entry.executor.id}>`)

    .addField("**Silinen Kanal:**", `\`${channel.name}\``)

    .setTimestamp()

    .setColor("#00ff00")

    .setFooter(

      `Sunucu: ${channel.guild.name} - ${channel.guild.id}`,

      channel.guild.iconURL()

    )

    .setThumbnail(channel.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);

});

client.on("roleCreate", async role => {

  let modlog = await db.fetch(`log_${role.guild.id}`);

  if (!modlog) return;

  const entry = await role.guild

    .fetchAuditLogs({ type: "ROLE_CREATE" })

    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Rol Oluşturma")

    .addField("**Rolü oluşturan kişi:**", `<@${entry.executor.id}>`)

    .addField("**Oluşturulan rol:**", `\`${role.name}\` **=** \`${role.id}\``)

    .setTimestamp()

    .setFooter(

      `Sunucu: ${role.guild.name} - ${role.guild.id}`,

      role.guild.iconURL

    )

    .setColor("#00ff00")

    .setThumbnail(role.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);

});

client.on("roleDelete", async role => {

  let modlog = await db.fetch(`log_${role.guild.id}`);

  if (!modlog) return;

  const entry = await role.guild

    .fetchAuditLogs({ type: "ROLE_DELETE" })

    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Rol Silme")

    .addField("**Rolü silen kişi:**", `<@${entry.executor.id}>`)

    .addField("**Silinen rol:**", `\`${role.name}\` **=** \`${role.id}\``)

    .setTimestamp()

    .setFooter(

      `Sunucu: ${role.guild.name} - ${role.guild.id}`,

      role.guild.iconURL

    )

    .setColor("#00ff00")

    .setThumbnail(role.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);

});

client.on("emojiCreate", async emoji => {

  let modlog = await db.fetch(`log_${emoji.guild.id}`);

  if (!modlog) return;

  const entry = await emoji.guild

    .fetchAuditLogs({ type: "EMOJI_CREATE" })

    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Emoji Oluşturma")

    .addField("**Emojiyi oluşturan kişi:**", `<@${entry.executor.id}>`)

    .addField("**Oluşturulan emoji:**", `${emoji} - İsmi: \`${emoji.name}\``)

    .setTimestamp()

    .setColor("#00ff00")

    .setFooter(

      `Sunucu: ${emoji.guild.name} - ${emoji.guild.id}`,

      emoji.guild.iconURL

    )

    .setThumbnail(emoji.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);

});

client.on("emojiDelete", async emoji => {

  let modlog = await db.fetch(`log_${emoji.guild.id}`);

  if (!modlog) return;

  const entry = await emoji.guild

    .fetchAuditLogs({ type: "EMOJI_DELETE" })

    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Emoji Silme")

    .addField("**Emojiyi silen kişi:**", `<@${entry.executor.id}>`)

    .addField("**Silinen emoji:**", `${emoji}`)

    .setTimestamp()

    .setFooter(

      `Sunucu: ${emoji.guild.name} - ${emoji.guild.id}`,

      emoji.guild.iconURL

    )

    .setColor("#00ff00")

    .setThumbnail(emoji.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);

});

client.on("emojiUpdate", async (oldEmoji, newEmoji) => {

  let modlog = await db.fetch(`log_${oldEmoji.guild.id}`);

  if (!modlog) return;

  const entry = await oldEmoji.guild

    .fetchAuditLogs({ type: "EMOJI_UPDATE" })

    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Emoji Güncelleme")

    .addField("**Emojiyi güncelleyen kişi:**", `<@${entry.executor.id}>`)

    .addField(

      "**Güncellenmeden önceki emoji:**",

      `${oldEmoji} - İsmi: \`${oldEmoji.name}\``

    )

    .addField(

      "**Güncellendikten sonraki emoji:**",

      `${newEmoji} - İsmi: \`${newEmoji.name}\``

    )

    .setTimestamp()

    .setColor("#00ff00")

    .setFooter(

      `Sunucu: ${oldEmoji.guild.name} - ${oldEmoji.guild.id}`,

      oldEmoji.guild.iconURL

    )

    .setThumbnail(oldEmoji.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);

});

client.on("guildBanAdd", async (guild, user) => {

  let modlog = await db.fetch(`log_${guild.id}`);

  if (!modlog) return;

  const entry = await guild

    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })

    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Yasaklama")

    .addField("**Kullanıcıyı yasaklayan yetkili:**", `<@${entry.executor.id}>`)

    .addField("**Yasaklanan kullanıcı:**", `**${user.tag}** - ${user.id}`)

    .addField("**Yasaklanma sebebi:**", `${entry.reason}`)

    .setTimestamp()

    .setColor("#00ff00")

    .setFooter(`Sunucu: ${guild.name} - ${guild.id}`, guild.iconURL)

    .setThumbnail(guild.iconURL);

  client.channels.cache.get(modlog).send(embed);

});

client.on("guildBanRemove", async (guild, user) => {

  let modlog = await db.fetch(`log_${guild.id}`);

  if (!modlog) return;

  const entry = await guild

    .fetchAuditLogs({ type: "MEMBER_BAN_REMOVE" })

    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Yasak kaldırma")

    .addField("**Yasağı kaldıran yetkili:**", `<@${entry.executor.id}>`)

    .addField(

      "**Yasağı kaldırılan kullanıcı:**",

      `**${user.tag}** - ${user.id}`

    )

    .setTimestamp()

    .setColor("#00ff00")

    .setFooter(`Sunucu: ${guild.name} - ${guild.id}`, guild.iconURL)

    .setThumbnail(guild.iconURL);

  client.channels.cache.get(modlog).send(embed);

});

///CrazyBot Mod Log Son

///CrazyBot Rol Koruma

client.on("roleDelete", async role => {

  let rolko = await db.fetch(`rolk_${role.guild.id}`);

  if (rolko) { 

         const entry = await role.guild.fetchAuditLogs({ type: "ROLE_DELETE" }).then(audit => audit.entries.first());

    if (entry.executor.id == client.user.id) return;

  role.guild.roles.create({ data: {

          name: role.name,

          color: role.color,

          hoist: role.hoist,

          permissions: role.permissions,

          mentionable: role.mentionable,

          position: role.position

}, reason: 'Silinen Roller Tekrar Açıldı.'})

  }

})

////CrazyBot Rol Koruma Son

///CrazyBot Kayıt

client.on("guildMemberAdd", member => {

  let guild = member.guild;

  let kanal = db.fetch(`kayıthg_${member.guild.id}`);

  let kayıtçı = db.fetch(`kayıtçırol_${member.guild.id}`);

  let aylartoplam = {

    "01": "Ocak",

    "02": "Şubat",

    "03": "Mart",

    "04": "Nisan",

    "05": "Mayıs",

    "06": "Haziran",

    "07": "Temmuz",

    "08": "Ağustos",

    "09": "Eylül",

    "10": "Ekim",

    "11": "Kasım",

    "12": "Aralık"

  };

  let aylar = aylartoplam;

  let user = client.users.cache.get(member.id);

  require("moment-duration-format");

  const kurulus = new Date().getTime() - user.createdAt.getTime();

  const ayyy = moment.duration(kurulus).format("M");

  var kontrol = [];

  if (ayyy < 1) {

    kontrol = "Şüpheli ";

  }

  if (ayyy > 1) {

    kontrol = "Güvenilir ";

  }

  if (!kanal) return;

/////////////////////////

  let randomgif = [ 

             "https://cdn.discordapp.com/attachments/795992076411207690/927116108161495100/GrandUnderstatedFirebelliedtoad-size_restricted.gif","https://cdn.discordapp.com/attachments/795992076411207690/927116134287818782/057056dae3c4c8a5c5426f6c458ba001.gif","https://cdn.discordapp.com/attachments/795992076411207690/927116133784514610/11a2ca5c4defb7b0bdbbab5c3891df95.gif","https://media.discordapp.net/attachments/795992076411207690/926364949838712872/ICVtTs.gif","https://tenor.com/view/avengers-avengers-assemble-avengers-endgame-captain-america-gif-23247411","https://tenor.com/view/doctor-strange-stephen-strange-yes-magic-gif-23422907","https://tenor.com/view/godzilla-vs-kong-godzilla-kong-king-kong-godzilla-king-of-the-monsters-gif-20136209"];

  ///////////////////

  const embed = new Discord.MessageEmbed()

    .setColor(0x36393F)

    .setImage(randomgif[Math.floor(Math.random() * randomgif.length)])

    .setThumbnail()

      
///Crazy Genel v12

///Crazy Genel v12
        
///Crazy Genel v12
        
///Crazy Genel v12

///Crazy Genel v12
        
///Crazy Genel v12
        
///Crazy Genel v12
      
///Crazy Genel v12
    

 //

  .setDescription(`

<a:kafadans:828264173661978635> » **Hoş Geldin!** ${member.user}

<a:yerimseni:832168029693018133> » **Seninle Beraber** \`${guild.memberCount}\` **Kişi Olduk!**

<a:miyav:832167982129479681> » **Kaydının Yapılması İçin** \`İsim\` **Ve** \`Yaş\` **Yazman Gerek.**

<a:PandaPanky:896057773127786506> » **Hesap Kuruluş Tarihi:** \`${moment(user.createdAt).format("DD")} ${aylar[moment(user.createdAt).format("MM")]} ${moment(user.createdAt).format("YYYY HH:mm:ss")}\`

<a:hmm:829293096591949856> » **Bu Vatandaş:** \`${kontrol}\`

<a:karpuz:832166356177911808> » <@&${kayıtçı}> **Yetkilileri İlgilenecektir**`);

  //

 

 client.channels.cache.get(kanal).send(embed);

 

});

///CrazyBot Kayıt Son

///CrazyBot Sayaç

client.on("message", async message => {

  if (!message.guild) return;

  if (db.has(`sayac_${message.guild.id}`) === true) {

    if (db.fetch(`sayac_${message.guild.id}`) <= message.guild.members.cache.size) {

      const embed = new Discord.MessageEmbed()

        .setTitle(`Tebrikler ${message.guild.name}!`)

        .setDescription(`<a:yes:828578465992409098> Başarıyla \`${db.fetch(`sayac_${message.guild.id}`)}\` Kullanıcıya Ulaştık! Sayaç Sıfırlandı!`)

        .setColor("RANDOM");

      message.channel.send(embed);

      message.guild.owner.send(embed);

      db.delete(`sayac_${message.guild.id}`);

    }

  }

});

client.on("guildMemberRemove", async member => {

  const channel = db.fetch(`sKanal_${member.guild.id}`);

  if (db.has(`sayac_${member.guild.id}`) == false) return;

  if (db.has(`sKanal_${member.guild.id}`) == false) return;

    member.guild.channels.cache.get(channel).send(`<a:Bb:760735947477876776> \`${member.user.tag}\` Sunucudan Ayrıldı! Toplamda \`${member.guild.memberCount}\` Kişi Kaldık \`${db.fetch(`sayac_${member.guild.id}`)}\` Üye Olmamıza Son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` Üye Kaldı!`);

});

client.on("guildMemberAdd", async member => {

  const channel = db.fetch(`sKanal_${member.guild.id}`);

  if (db.has(`sayac_${member.guild.id}`) == false) return;

  if (db.has(`sKanal_${member.guild.id}`) == false) return;

    member.guild.channels.cache.get(channel).send(`<a:Hg:760735755399594034> \`${member.user.tag}\` Sunucuya Katıldı ! Toplam \`${member.guild.memberCount}\` Kişi Olduk \`${db.fetch(`sayac_${member.guild.id}`)}\` Üye Olmamıza Son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` Üye Kaldı!`);

});

///CrazyBot Sayaç Son

///CrazyBot Resimli Hg Bb

client.on("guildMemberRemove", async member => {

  //let resimkanal = JSON.parse(fs.readFileSync("./ayarlar/gç.json", "utf8"));

  //const canvaskanal = member.guild.channels.cache.get(resimkanal[member.guild.id].resim);

  

  if (db.has(`gçkanal_${member.guild.id}`) === false) return;

  var canvaskanal = member.guild.channels.cache.get(db.fetch(`gçkanal_${member.guild.id}`));

  if (!canvaskanal) return;

  const request = require("node-superfetch");

  const Canvas = require("canvas"),

    Image = Canvas.Image,

    Font = Canvas.Font,

    path = require("path");

  var randomMsg = ["<a:Bb:760735947477876776> Sunucudan Ayrıldı."];

  var randomMsg_integer =

    randomMsg[Math.floor(Math.random() * randomMsg.length)];

  let msj = await db.fetch(`cikisM_${member.guild.id}`);

  if (!msj) msj = `{uye}, ${randomMsg_integer}`;

  const canvas = Canvas.createCanvas(640, 360);

  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage(

    "https://i.hizliresim.com/Wrn1XW.jpg"

  );

  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#74037b";

  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = `#D3D3D3`;

  ctx.font = `37px "Warsaw"`;

  ctx.textAlign = "center";

  ctx.fillText(`${member.user.username}`, 300, 342);

  let avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });

  const { body } = await request.get(avatarURL);

  const avatar = await Canvas.loadImage(body);

  ctx.beginPath();

  ctx.lineWidth = 4;

  ctx.fill();

  ctx.lineWidth = 4;

  ctx.arc(250 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);

  ctx.clip();

  ctx.drawImage(avatar, 250, 55, 110, 110);

  const attachment = new Discord.MessageAttachment(

    canvas.toBuffer(),

    "Darkwill-güle-güle.png"

  );

    canvaskanal.send(attachment);

    canvaskanal.send(

      msj.replace("{uye}", member).replace("{sunucu}", member.guild.name)

    );

    if (member.user.bot)

      return canvaskanal.send(`<a:h_:828264611877879818>  Bu bir bot, ${member.user.tag}`);

  

});

client.on("guildMemberAdd", async member => {

  if (db.has(`gçkanal_${member.guild.id}`) === false) return;

  var canvaskanal = member.guild.channels.cache.get(db.fetch(`gçkanal_${member.guild.id}`));

  if (!canvaskanal || canvaskanal ===  undefined) return;

  const request = require("node-superfetch");

  const Canvas = require("canvas"),

    Image = Canvas.Image,

    Font = Canvas.Font,

    path = require("path");

  var randomMsg = ["<a:Hg:760735755399594034> Sunucuya Katıldı."];

  var randomMsg_integer =

    randomMsg[Math.floor(Math.random() * randomMsg.length)];

  let paket = await db.fetch(`pakets_${member.id}`);

  let msj = await db.fetch(`cikisM_${member.guild.id}`);

  if (!msj) msj = `{uye}, ${randomMsg_integer}`;

  const canvas = Canvas.createCanvas(640, 360);

  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage(

    "https://i.hizliresim.com/UyVZ4f.jpg"

  );

  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#74037b";

  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = `#D3D3D3`;

  ctx.font = `37px "Warsaw"`;

  ctx.textAlign = "center";

  ctx.fillText(`${member.user.username}`, 300, 342);

  let avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }) ;

  const { body } = await request.get(avatarURL);

  const avatar = await Canvas.loadImage(body);

  ctx.beginPath();

  ctx.lineWidth = 4;

  ctx.fill();

  ctx.lineWidth = 4;

  ctx.arc(250 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);

  ctx.clip();

  ctx.drawImage(avatar, 250, 55, 110, 110);

  const attachment = new Discord.MessageAttachment(

    canvas.toBuffer(),

    "Darkwill-hosgeldin.png"

  );

  canvaskanal.send(attachment);

  canvaskanal.send(

    msj.replace("{uye}", member).replace("{sunucu}", member.guild.name)

  );

  if (member.user.bot)

    return canvaskanal.send(`<a:h_:828264611877879818>  Bu bir bot, ${member.user.tag}`);

});

///CrazyBot Resimli Hg Bb Son

///CrazyBot Sunucu Panel

client.on("guildMemberAdd", async(member) => {

  let sunucupaneli = await db.fetch(`sunucupanel_${member.guild.id}`)

  if(sunucupaneli) {

    let rekoronline = await db.fetch(`panelrekor_${member.guild.id}`)

    let toplamuye = member.guild.channels.find(x =>(x.name).startsWith("Toplam Üye •"))

    let toplamaktif = member.guild.channels.find(x =>(x.name).startsWith("Aktif Üye •"))

    let botlar = member.guild.channels.find(x =>(x.name).startsWith("Botlar •"))

    let rekoraktif = member.guild.channels.find(x =>(x.name).startsWith("Rekor Aktiflik •"))

    

    if(member.guild.members.filter(off => off.presence.status !== 'offline').size > rekoronline) {

      db.set(`panelrekor_${member.guild.id}`, member.guild.members.filter(off => off.presence.status !== 'offline').size)

    }

    try{

      toplamuye.setName(`Toplam Üye • ${member.guild.members.size}`)

      toplamaktif.setName(`Aktif Üye • ${member.guild.members.filter(off => off.presence.status !== 'offline').size}`)

      botlar.setName(`Botlar • ${member.guild.members.filter(m => m.user.bot).size}`)

      rekoraktif.setName(`Rekor Aktiflik • ${rekoronline}`)

   } catch(e) { }

  }

})

client.on("guildMemberRemove", async(member) => {

  let sunucupaneli = await db.fetch(`sunucupanel_${member.guild.id}`)

  if(sunucupaneli) {

    let rekoronline = await db.fetch(`panelrekor_${member.guild.id}`)

    let toplamuye = member.guild.channels.find(x =>(x.name).startsWith("Toplam Üye •"))

    let toplamaktif = member.guild.channels.find(x =>(x.name).startsWith("Aktif Üye •"))

    let botlar = member.guild.channels.find(x =>(x.name).startsWith("Botlar •"))

    let rekoraktif = member.guild.channels.

    find(x =>(x.name).startsWith("Rekor Aktiflik •"))

    

    if(member.guild.members.filter(off => off.presence.status !== 'offline').size > rekoronline) {

      db.set(`panelrekor_${member.guild.id}`, member.guild.members.filter(off => off.presence.status !== 'offline').size)

    }

    try{

      toplamuye.setName(`Toplam Üye • ${member.guild.members.size}`)

      toplamaktif.setName(`Aktif Üye • ${member.guild.members.filter(off => off.presence.status !== 'offline').size}`)

      botlar.setName(`Botlar • ${member.guild.members.filter(m => m.user.bot).size}`)

      rekoraktif.setName(`Rekor Aktiflik • ${rekoronline}`)

   } catch(e) { }

  }

})

///CrazyBot Sunucu Panel Son

///CrazyBot Mute

client.on('roleDelete', async role => {

    const data = await require('quick.db').fetch(`xen-mute.${role.guild.id}`);

    if(data && data === role.id) require('quick.db').delete(`xen-mute.${role.guild.id}`); 

    });

///CrazyBot Mute Son

///CrazyBot Spam Engel Baş

const dctrat = require('dctr-antispam.js'); 

var authors = [];
var warned = [];

var messageLog = [];



client.on('message', async message => {
if (!message.member.hasPermission("MANAGE_GUILD")) {
let rol = db.fetch(`spamyetkilisi_${message.guild.id}`);
const spam = await db.fetch(`spam.${message.guild.id}`);
if(!spam) return;
const maxTime = await db.fetch(`max.${message.guild.id}.${message.author.id}`);
const timeout = await db.fetch(`time.${message.guild.id}.${message.author.id}`);
db.add(`mesaj.${message.guild.id}.${message.author.id}`, 1)
if(timeout) {
const sayı = await db.fetch(`mesaj.${message.guild.id}.${message.author.id}`);
if(Date.now() < maxTime) {
  const westraaaaam = new Discord.MessageEmbed()
  .setColor(0x36393F)
  message.channel.send(`<a:reddetmek:825688868107059201> <@${message.author.id}> , **Bu sunucuda spam yapmak yasak!**\n**> <@&${rol}> Abi Şuna Bi Bakın Yav Elimde Kalıcak**`)
 // .setFooter(`Bu mesaj otomatik olarak silinecektir.`)
 if (message.member.hasPermission("BAN_MEMBERS")) return ;
 message.channel.send(westraaaaam)
  return message.delete();

}
} else {
db.set(`time.${message.guild.id}.${message.author.id}`, 'ok');
db.set(`max.${message.guild.id}.${message.author.id}`, Date.now()+3000);
setTimeout(() => {
db.delete(`mesaj.${message.guild.id}.${message.author.id}`);
db.delete(`time.${message.guild.id}.${message.author.id}`);
}, 500) // default : 500
}}}


);

///CrazyBot Spam Engel Son

client.on('message', async message => {
    if (message.content === 'fakegiriş') {
        client.emit('guildMemberAdd', message.member || await message.guild.members.fetch(message.author));
    }
});

client.on('message', async message => {
    if (message.content === 'fakeçıkış') {
        client.emit('guildMemberRemove', message.member || await message.guild.members.fetch(message.author));
    }
});