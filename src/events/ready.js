const { discord } = require("../config.js");

module.exports = {
  name: "ready",
  async execute(client) {
    console.log(`${client.user.tag} is online!`);
    console.log(`Commands: ${client.commands.toJSON().map(c => c.name).join(', ')}`)
    await client.user.setPresence(discord.presence);
  },
};
