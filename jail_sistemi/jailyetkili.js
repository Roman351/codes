const Discord = require("discord.js");
const db = require('quick.db')



module.exports.run = async (client, message, args) => {

let yetkilirol = message.mentions.roles.first() || message.guild.roles.find(c => c.name === args[1].join(' '))
  if (!yetkilirol) return message.channel.send(` Bir rol etiketle.`)


message.channel.send("Başarıyla Ayarlandı!")

db.set(`jailyetkilisi_${message.guild.id}`, yetkilirol.id)


}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commands"],
  permLevel: 0
};

module.exports.help = {
  name: 'jail-yetkili',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
