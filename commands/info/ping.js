// Specify packages here!
const Discord = require("discord.js");

module.exports = {
    name: "ping", // name of the file without .js
    aliases: ["ping", "pi"], //any aliases for the command
    category: "info", // the directory the file is in; directory after /commands/
    description: "Returns the bot ping time.", // description of the commands
    usage: "ping", // simple usage of the commands
    dev: false, // if its only meant for the owner/developer (Not working right now)
    run: async (client, message, args) => {// specify the code after this line

      let ping = new Discord.MessageEmbed()
        .setTitle('Ping')
        .setDescription(`🏓 Pong! Your ping is ${Math.round(client.ws.ping)}ms!`)
        .setColor(0x00AE86)
      
      message.channel.send(ping)
  
  } // end async function
} // end module.exports
