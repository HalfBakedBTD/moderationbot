const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No can do pal! This is an **__admin only__** command.");

    //let kickEmbed = new Discord.RichEmbed()
    //.setDescription("Kick")
    //.setColor("#e56b00")
    //.addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    //.addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    //.addField("Kicked In", message.channel)
    //.addField("Tiime", message.createdAt)
    //.addField("Reason", kReason);

    message.guild.member(kUser).kick(kReason);
    //kickChannel.send(`👢 USER KICKED 👢\n\nKicked: <@${kUser.id}>\n\nPunisher: <@${message.author.id}>\n\nKicked In: ${message.channel}\n\nReason: ${kReason}`);
    let banEmbed = new Discord.RichEmbed()
    .setTitle("🔨 USER BANNED 🔨")
    .setThumbnail("https://tse2.mm.bing.net/th?id=OIP.6BSojMB2lSw1jTZCtC_BIgHaHa&pid=Api")
    .setColor("#2f3640")
    .setDescription(`**Kicked User:** ${kUser}\n**Kicked By:** <@${message.author.id}>\n**Banned In:** ${message.channel}\n**Reason:** ${kReason}`);
    
    message.channel.send(banEmbed)
    
    return;
}


module.exports.help = {
  name: "kick"
}
