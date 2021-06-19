module.exports = async (client, disbut, message) => {

  if (message.author.bot || message.channel.type === 'dm') return;

  if (message.content.indexOf(client.config.discord.prefix) !== 0) return;

  const args = message.content.slice(client.config.discord.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.cmds.get(command) || client.cmds.find(cmd => cmd.info.aliases && cmd.info.aliases.includes(command));

  if (cmd) cmd.run(client, message, args, disbut)
};