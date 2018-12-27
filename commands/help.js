const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let botEmbed = new Discord.RichEmbed()
  .setColor('#fff200')
  .setTitle("Bot Commands:")
  .setDescription("`.help` shows help message.\n***MORE COMMING SOON!***");
  message.channel.send(botEmbed)
}
	      
module.exports.help = {
  name: "help"
}
