client.on('guildCreate', guild => {
const embed = new Discord.RichEmbed()
.setColor(RANDOM)
.setTitle('Bir Sunucuya Katıldım;')
  .setDescription(`Bot, 》${guild.name}《 adlı sunucuya katıldım [${guild.memberCount} Üye]!`)
  .setFooter('RomanBot', client.user.avatarURL)
  .setTimestamp()
client.channels.get('KANALID').send(embed);
});


//girince log

client.on('guildDelete', guild => {
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('Bir Sunucudan Ayrıldım;')
  .setDescription(`》${guild.name}《 sunucudan ayrıldım [${guild.memberCount} Üye]!`)
  .setFooter('RomanBot', client.user.avatarURL)
  .setTimestamp()
  client.channels.get('KANALID').send(embed);
});
//çıkınca log
