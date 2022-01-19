const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../cryptoconfig.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
  var msgArray = [
"#DarkwillGeriDöndü",
"Darkwill v12 güncell sistemler ile geri döndü",
"s!yardım - s!davet - s!istatistik",
 ];

 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
  client.user.setActivity(`${msgArray[rastgeleOyun]}`, { type: 'STREAMING' ,  url: 'https://www.twitch.tv' })
}, 5000);
    console.log(`Darkwill başarıyla giriş yaptı.`);
}
