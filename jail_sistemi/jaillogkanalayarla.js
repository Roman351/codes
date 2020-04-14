const Discord = require("discord.js");
const db = require('quick.db')



module.exports.run = async (client, message, args) => {
let roman = await db.fetch(`jailyetkilisi_${message.guild.id}`)
let yetkili = message.guild.roles.get(roman)
if(!yetkili) return message.channel.send(`Jail yetkilisi ayarlı değil.`)
if (!message.member.roles.has(`${yetkili.id}`)) return message.channel.send(`komutu kullanabilmek için ${yetkili} rolüne sahip olman gerekiyor.`)
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

