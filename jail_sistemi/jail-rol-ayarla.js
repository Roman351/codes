const Discord = require("discord.js");
const db = require('quick.db')



module.exports.run = async (client, message, args) => {
let guild = message.guild    
let mesaj = args.slice(0).join(" ");
if (!mesaj) return message.channel.send("Lütfen Bir Rol İsmi Yaz! (Etiket Değil)")



db.set(`roman_${message.guild.id}`, mesaj)


message.channel.send("Tebrikler Rol Başrıyla "+mesaj+" Olarak Ayarlandı")


}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commands"],
  permLevel: 0
};

module.exports.help = {
  name: 'jail-ayarla',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
