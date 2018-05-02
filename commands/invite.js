const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  bot.generateInvite(['ADMINISTRATOR'])
    .then(link => {
      message.reply(`This is the link to add me to your server: ${link}`);
    });
}

module.exports.help = {
  name: "invite"
}
