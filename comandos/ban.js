const Discord = require(`discord.js`);
const client = new Discord.Client();
const { Client, MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "ban",
  alias: ["banear"],

  execute (client, message, args){

    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("No tengo los permisos!")

    let user = message.mentions.members.first();

    let banReason = args.join(` `).slice(22);

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("no tienes permisos para usar este comando")

    if(!user) return message.channel.send("Debes mencionar a alguien!")

    if (message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.channel.send("no puedes banear a alguien igual o mayor rango que tu")

    if(user === message.author) returnmessage.channel.send("no te puedes autobanear") 

    if(!banReason) return message.channel.send("por que lo quieres banear especificate")

    user.ban({ reason: banReason })

    message.channel.send(`El usuario **${user}** fue baneado por **${banReason}** \n\ Baneado por enderBot`)

  }
  
}