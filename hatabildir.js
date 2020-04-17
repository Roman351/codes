const Discord = require("discord.js");



module.exports.run = async (client, message, args,member) => {

const kanal = "KANALID"
let roman = args.slice(0).join(" ");
if (!roman) return message.channel.send("Hata mesajını yazsana aq")

const embed = new Discord.RichEmbed()
.setTitle("Yeni Bir Hata Var!")
.setDescription(`    

Hatayı Bildiren Kişi:
${message.author.username}

Hata Olduğunu İdda eden mesajı:
${roman}
`)
.setThumbnail(message.author.avatarURL)
.setFooter('İyi Günler')
.setColor("RANDOM")

message.channel.send("Tebrikler Zırto Mesajın İletildi..")
client.channels.get(kanal).send(embed)



}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'hata-bildir',
};
