const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Ain't nobody got time for dat!");
  if(!args[0]) return message.channel.send("Please add a number! `-clear 10`");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(2000));
  });

}

module.exports.help = {
  name: "clear"
}
