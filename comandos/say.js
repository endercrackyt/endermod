const Discord = require(`discord.js`);
const client = new Discord.Client();
const { Client, MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "say",
  alias: ["decir"],

  execute (client, message, args){

    let texto = args.join(` `)
    if(!texto) return message.channel.send("lo siento pero no hay texto")

    message.delete()
    message.channel.send(texto)

  }
  
}