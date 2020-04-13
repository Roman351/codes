const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");
const fs = require("fs");
exports.run = (client, message, params, args) => {
  let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":x: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  const embed = new Discord.RichEmbed()
.setColor("RED")
.setAuthor("Yıldız")
.setDescription(":white_small_square: Birini etiketle ki IP'sini bul.")
  var Random = [
    "1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9"
  ];
 var Random1 = [
     "2",
"4",
"6",
"8",
"5",
"7",
"3",
"1",
"4"
  ];
 var Random2 = [
    "4",
"5",
"7",
"2",
"4",
"5",
"6",
"7",
"2"
  ];
 var Random3 = [
     "3",
"1",
"5",
"6",
"9",
"1",
"4",
"5",
"8"
  ];
 var Random4 = [
    "7",
"4",
"3",
"5",
"6",
"4",
"6",
"3",
"5"
  ];
 var Random5 = [
     "1",
"5",
"4",
"7",
"5",
"8",
"9",
"0",
"4"
  ];
 var Random6 = [
    "4",
"2",
"5",
"3",
"5",
"3",
"5",
"6",
"7"
  ];
 var Random7 = [
     "5",
"6",
"8",
"5",
"6",
"3",
"9",
"2",
"1"
  ];
 var Random8 = [
     "4",
"6",
"7",
"5",
"7",
"4",
"8",
"8",
"1"
  ];
var Random9 = [
     "0",
"1",
"2",
"5",
"6",
"3",
"6",
"7",
"4"
  ];
  var ip = Math.floor(Math.random() * Random.length);
var ip1 = Math.floor(Math.random() * Random1.length);
var ip2 = Math.floor(Math.random() * Random2.length);
var ip3 = Math.floor(Math.random() * Random3.length);
var ip4 = Math.floor(Math.random() * Random4.length);
var ip5 = Math.floor(Math.random() * Random5.length);
var ip6 = Math.floor(Math.random() * Random6.length);
var ip7 = Math.floor(Math.random() * Random7.length);
var ip8 = Math.floor(Math.random() * Random8.length);
var ip9 = Math.floor(Math.random() * Random9.length);

  let user = message.mentions.users.first();
let sonuç = "`"+Random[ip]+Random1[ip]+"."+Random3[ip]+Random4[ip]+Random5[ip]+"."+Random6[ip]+Random7[ip]+"."+Random8[ip]+Random9[ip]+"`"
  if (!user)
    return message.channel.send(embed);


const roman = new Discord.RichEmbed()
.setTitle('🛩️ Sonuç başarılı!')
.setColor("RED")
.setDescription(":white_small_square: İşte kişinin IP'si; "+sonuç)



message.channel.send(roman)

}
//+Random[ip]+Random1[ip]+"."+Random3[ip]+Random4[ip]+Random5[ip]+"."+Random6[ip]+Random7[ip]+"."+Random8[ip]+Random9[ip]+
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Eğlence"
};

exports.help = {
  name: "ip",
  description: "tokatat",
  usage: "tokatat",
  kategori: "Eğlence"
};
