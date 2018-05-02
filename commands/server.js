const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  message.channel.send("My Server: https://discord.gg/csCXCZe")
}

module.exports.help = {
  name: "server"
}
