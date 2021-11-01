const { discord } = require("../config");

module.exports = {
  name: "messageCreate",
  async execute(client, message) {
    if (
      message.author.bot ||
      !message.guild ||
      !message.content.startsWith(discord.prefix)
    )
      return;

    const args = message.content
      .slice(discord.prefix.length)
      .trim()
      .split(/\s+/g);
    const commandName = args.shift().toLowerCase();
    const command =
      client.commands.get(commandName) ||
      client.commands.find(
        (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
      );

    if (!command) return;

    try {
      await command.execute(message, args);
    } catch (error) {
      console.error(error);
      message.reply("Ocorreu um erro na execução desse comando.");
    }
  },
};
