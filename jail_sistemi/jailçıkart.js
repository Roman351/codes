const Discord = require("discord.js");
const db = require('quick.db')
const ms = require("ms");


module.exports.run = async (client, message, args,member) => {
  let kişi = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let guild = message.guild  
let roman = await db.fetch(`jailyetkilisi_${message.guild.id}`)
let yetkili = message.guild.roles.get(roman)
if(!yetkili) return message.channel.send(`Jail yetkilisi ayarlı değil.`)
let kanal = await db.fetch(`jailkanal_${message.guild.id}`)
if(!kanal)  return message.channel.send(`Jail kanalını bulamadım.`)
let rol = db.get(`roman_${message.guild.id}`)
 if (!message.member.roles.has(`${yetkili.id}`)) return message.channel.send(`komutu kullanabilmek için ${yetkili} rolüne sahip olman gerekiyor.`)
 var role = message.guild.roles.find(role => role.name === rol);

kişi.removeRole(role);

message.channel.send("Başarıyla Hapisaneden Çıkarttım.")


const wasted = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setColor(`#f3c7e1`)
  .setDescription(`biri hapishaneden Çıkartıldı.`)
  .addField(`**Çıkartılan Kişi:**`, kişi, true)
  .addField(`**Hakim:**`, `<@${message.author.id}>`, true)
  .setFooter(`${message.channel.name} kanalında kullanıldı.`)
  .setThumbnail(message.author.avatarURL)

client.channels.get(kanal).send(wasted)

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commands"],
  permLevel: 0
};

module.exports.help = {
  name: 'un-jail',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
