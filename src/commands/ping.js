module.exports = {
  name: "ping",
  aliases: ["pong"],
  async execute(message, args) {
    await message.channel.send(`Pong! \`${message.client.ws.ping}ms\``);
  },
};
