const Discord = require("discord.js");
const db = require('quick.db');


module.exports.run = async (client, message, args,member) => {

let kişi = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if (!kişi) return message.channel.send("Birini Etiketle!")
let mesaj = args.slice(1).join(" ");

message.channel.send("Başarıyla Uyardım.")


kişi.send("**"+message.guild.name+"** Sunucusundan Bir Uyarı Aldın! ```"+mesaj+"```")


db.set(`endlesscode_${message.guild.id}`, mesaj)





}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'uyar',
};
