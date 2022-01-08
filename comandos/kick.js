const Discord = require(`discord.js`);
const client = new Discord.Client();
const { Client, MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "kick",
  alias: ["expulsar"],

  execute (client, message, args){

    if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("No tengo los permisos!")

    let user = message.mentions.members.first();

    let kickReason = args.join(` `).slice(22);

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("no tienes permisos para usar este comando")

    if(!user) return message.channel.send("Debes mencionar a alguien!")

    if (message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.channel.send("no puedes expulsar a alguien igual o mayor rango que tu")

    if(user === message.author) returnmessage.channel.send("no te puedes expulsar a ti mismo") 

    if(!kickReason) return message.channel.send("por que lo quieres expulsar especificate")

    user.kick({ reason: kickReason })

    message.channel.send(`El usuario **${user}** fue expulsado por **${kickReason}** \n\ expulsado por enderBot`)

  }
  
}