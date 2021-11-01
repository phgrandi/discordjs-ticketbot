const { Client, Intents, Collection } = require("discord.js");
const { auth } = require("./config.js");
const fs = require("fs");
const path = require("path");

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
  ],
});

client.commands = new Collection();

for (const file of fs.readdirSync(path.join(__dirname, "./commands"))) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

for (const file of fs.readdirSync(path.join(__dirname, "./events"))) {
  const event = require(`./events/${file}`);
  client.on(event.name, (...args) => event.execute(client, ...args));
}

client.login(auth.token).catch(console.error);
