const Discord = require(`discord.js`);
const client = new Discord.Client();
const { Client, MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "send",
  alias: ["enviar"],

  execute (client, message, args){

  if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send("no tengo los permisos paa dar anuncios")

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("no tienes permisos para dar anuncios")

  let canal = message.mentions.channels.first()

  if(!canal) return message.channel.send(`${message.author} donde doy el anuncio especificate`)

  let texto = args.slice(1).join(" ")

  if(!texto) return message.channel.send("que escribo en el anuncio")  

  let embed = new Discord.MessageEmbed()
  .setTitle('**Nuevo Anuncio**')
  .setThumbnail(`https://th.bing.com/th/id/OIP.zrwtHmzTgpGeLZfzhTjJawHaEK?w=285&h=180&c=7&r=0&o=5&pid=1.7`)
  .setColor(0x050cd9)
  .addField(texto, `Gracias por su atención`)  

  message.delete()

  canal.send(embed)

  }
  
}