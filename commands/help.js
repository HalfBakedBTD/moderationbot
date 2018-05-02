const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let botEmbed = new Discord.RichEmbed()
  .setColor('#fff200')
  .setTitle("Bot Commands:")
  .setDescription("`-help` shows help message.\n\n`-ban` bans a user.\n`-kick` kicks a user.\n`-clear` deletes a set amount of messages.");
  message.channel.send(botEmbed)
}
	      
module.exports.help = {
  name: "help"
}
