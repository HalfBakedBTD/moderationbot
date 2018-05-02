const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let botEmbed = new Discord.RichEmbed()
  .setColor('#fff200')
  .setTitle("Bot Commands:")
  .setDescription("`-help` shows help message.\n`-invite` sends a link to add me to your server.\n`-server` makes me send you a link to my owner's server.\n\n`-ban` bans a user.\n`-kick` kicks a user.\n`-clear` deletes a set amount of messages. This bot was made by <@284137818895417344> from Liquish Setups. To order your own bot or website, you can find us [here](https://discord.gg/uKgPWjP)!");
  message.channel.send(botEmbed)
}
	      
module.exports.help = {
  name: "help"
}
