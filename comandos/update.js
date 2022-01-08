const Discord = require(`discord.js`);
const client = new Discord.Client();
const { Client, MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "update",
  alias: ["actualización"],

  execute (client, message, args){

    let embed = new Discord.MessageEmbed()
    .setTitle('**NUEVA UPDATE**')
    .setThumbnail(`https://th.bing.com/th/id/OIP.CuIXERJoVvNMKDCiVkwKZQHaHa?w=194&h=194&c=7&r=0&o=5&pid=1.7`)
    .setColor(0x66ff4a)
    .setDescription('hola esta es mi nueva update')
    .addField(`comandos Mejorados:`, `send,update,info,help`)
    .setImage("https://th.bing.com/th/id/OIP.A9bl9ir5Zz06YbYffYuJCwHaFj?w=288&h=216&c=7&r=0&o=5&pid=1.7")
    .setFooter(`Informacion pedida por: ${message.author.username}`);

    message.channel.send(embed);

  }
  
}