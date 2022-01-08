const Discord = require(`discord.js`);
const client = new Discord.Client();
const { Client, MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "help",
  alias: ["ayuda"],

  execute (client, message, args){

   if (message.content.endsWith("moderator")) return message.channel.send("comandos de moderacion: \n\ e?ban \n\ e?kick \n\ e?suggest \n\ e?mute ")

    if (message.content.endsWith("information")) return message.channel.send("comandos de informacion: \n\ e?help \n\ e?info \n\ e?update  ")

   if (message.content.endsWith("utility")) return message.channel.send("comandos de informacion: \n\ e?say \n\ e?annoucement \n\ e?clear ")
    
    message.channel.send("Hola soy enderBot soy un bot de moderacion estas son mis categorias: \n\ information \n\ moderator \n\ utility")

  }
  
}