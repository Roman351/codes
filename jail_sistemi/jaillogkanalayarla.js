const Discord = require("discord.js");
const db = require('quick.db')



module.exports.run = async (client, message, args) => {

 let kanal = message.mentions.channels.first() || message.guild.channels.find(c => c.name === args[1].join('-'))
  if (!kanal) return message.channel.send(` Bir kanal etiketle.`)

db.set(`jailkanal_${message.guild.id}`, kanal.id)
  message.channel.send(` Jail logunun tutulacağı kanal ${kanal} olarak ayarlandı.`)
  } 



module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commands"],
  permLevel: 0
};

module.exports.help = {
  name: 'jail-log-ayarla',
  description: 'Botta bulunan tüm komutları gösterir',
};
