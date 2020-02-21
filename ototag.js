const Discord = require('discord.js');
const db = require("quick.db");


exports.run = async (client, message, args) => {
  

let tag = args[0];
let kanal = message.mentions.channels.first();

if(!tag) return message.reply('Bir tag yazmalısın')
if(!kanal) return message.reply('Bir kanal etiketlemelisin')

db.set(`tagK_${message.guild.id}`, tag);
  db.set(`kanalK_${message.guild.id}`, kanal.id);


message.channel.send(`ototag **${tag}** Kanalı ${kanal} olarak ayarlandı!`)



};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sayaç'],
  permLevel: 0
};

exports.help = {
  name: 'ototag',
  description: 'sunucunuzda sayaç sistemini ayarlar',
  usage: '(prefix)sayaç-ayarla <sayı> <#kanal>'
};

//KOMUTLAR


client.on('guildMemberAdd', async member => {
  
  let tag = await db.fetch(`tagK_${member.guild.id}`)
  let kanal = await db.fetch(`kanalK_${member.guild.id}`)
  
 if (!tag) return
  if (!kanal) return
 member.setNickname(`${tag} | ${member.user.username}  `); 
  client.channels.get(kanal).send(`:inbox_tray: ${member} Sunucuya katıldı! **${tag}** Tagı Başarıyla verildi.`)
})

//BOTJS
