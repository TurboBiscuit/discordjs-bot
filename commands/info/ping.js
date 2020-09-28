const Discord = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ["ping", "pi"],
    category: "info",
    description: "Returns the bot ping time.",
    usage: "ping",
    dev: false,
    run: async (client, message, args) => {

      let ping = new Discord.MessageEmbed()
        .setTitle('Ping')
        .setDescription(`🏓 Pong! Your ping is ${Math.round(client.ws.ping)}ms!`)
        .setColor(0x00AE86)
      
      message.channel.send(ping)
  
  }
}
