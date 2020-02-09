const Discord = require('discord.js');


exports.run = function(client, message,args,member) {
  
let yorum = args.slice(0).join(" ");
let mesaj = client.emojis.get("670167024634298371"); 
let hata = client.emojis.get("670167024814653480");
let başarılı = client.emojis.get("670167024483172363");
let sunucuroman = "675331941620514847";
let kanalroman = "675333529223299092";
if (!yorum) return message.channel.send(hata + 'Yorum Yaz?')


 const embed = new Discord.RichEmbed()
.setDescription(mesaj + " Bir Yorum Var! \n\n Yorum: **"+yorum+"** "+başarılı)
.setThumbnail(member.user.avtarURL)
  client.guilds.get(sunucuroman).channels.get(kanalroman).send(embed);
message.channel.send('Tebrikler Mesajınız İletildi..')

};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yorum', 
};
