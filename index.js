const Discord = require(`discord.js`);
const client = new Discord.Client(); 
require(`dotenv`).config();

const { Client, Collection, Guild} = require("discord.js");
const keepAlive = require(`./server.js`)

const fs = require(`fs`);

let prefix = `e?`

///////handler/////////

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync(`./comandos`).filter(file => file.endsWith(`.js`));

for (const file of commandFiles) {

  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
  
}

//////////presencia/////////

const estados = [`a usuarios malos`]

client.on(`ready`, () => {

  setInterval(() => {
    function presence() {
      client.user.setPresence({
        status: `on`,
        activity: {
          name: estados[Math.floor(Math.random() * estados.length)],
          type: `WATCHING`,
        }
      })
    }
    presence()
  }, 10000);

  console.log(`enderBot esta listo`)
});

///////evento message///////

client.on(`message`, (message) => {

  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot)return;

  let usuario = message.mentions.members.first() || message.member;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  ///////Handler///////

  let cmd = client.commands.find((c) => c.name === command ||  c.alias &&  c.alias.includes(command));
  if(cmd){
    cmd.execute(client, message, args)
  }

});



const mySecret = process.env['token']
client.login(mySecret)