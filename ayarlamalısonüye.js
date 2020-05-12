const discord = require('discord.js'); // modüller tanımlandı 
const db = require('quick.db');

exports.run = (client,message,args) => {


const roman = args.slice(0).join(' ')
if(!roman) return message.channel.send("Lütfen Bir Ses Kanalının İd'sini Yazın \n\n ```Lütfen Saçma Sapan Şeyler Yazmayın```")




message.channel.send("Başarılı Bundan Sonra Son Üye Olan Kişinin İsmi `"+roman+"`idli Kanalda Gözükecektir!")

db.set(`romanbot_${message.guild.id}`, roman) //kanal id tanımlandı

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'sonüye-sistemi3',
};
// KOMUTLARA

client.on("guildMemberAdd",  (member,message) => {

let kanalid = db.get(`romanbot_${member.guild.id}`)

client.channels.get(kanalid)
.setName('Son Üye => '+member.user.username)

})  

//BOT JS
