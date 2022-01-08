const Discord = require(`discord.js`);
const client = new Discord.Client();
const { Client, MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "info",
  alias: ["informacion"],

  execute (client, message, args){

   let embed = new Discord.MessageEmbed()
    .setTitle('**Informacion**')
    .setThumbnail(`https://images-ext-1.discordapp.net/external/M6yBAiXVk__vW4XMjr_bBs2ixy7_61b0TU8_r15ACxE/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/862905211001503774/38fd3ae38979bf6ca40c48efea2eb384.png`)
    .setColor(0x00f3b5)
    .setDescription('hola soy enderbot un bot de moderacion y utiles')
    .addField(`comandos  como:`, `say, kick,ban,avatar`)
    .addField(`Prefix`, `e?`)
    .addField(`para mas comandos usa:`, `e?help`)
    .setImage("https://th.bing.com/th/id/OIP.xGkf8vzFfP8GDluDi7FYiAHaE8?w=286&h=191&c=7&r=0&o=5&pid=1.7");
    
    message.channel.send(embed); 

  }
  
}