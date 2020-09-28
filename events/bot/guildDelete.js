const superagent = require('superagent');
const chalk = require('chalk');
const util = require("util");

module.exports = async (client) => {

    client.user.setActivity((client.config.prefix) + 'ping | In ' + (client.guilds.cache.size) + ' guilds', { type: 'WATCHING' });

client.on('ready', () => {
     console.log(`Running as ${client.user.tag}`);
});

}
