const { MessageButton, MessageActionRow, MessageEmbed } = require("discord.js");
const { ticket } = require("../config.js");

module.exports = {
  name: "ticketsetup",
  aliases: ["setup"],
  async execute(message, args) {
    if (!message.member.permissions.has("ADMINISTRATOR")) return;

    const button = new MessageButton()
      .setStyle("SUCCESS")
      .setEmoji(ticket.emojiOpen)
      .setCustomId("openTicket");

    const embed = new MessageEmbed()
      .setDescription(ticket.message)
      .setColor("#2f3136");

    await message.channel.send({
      content: message.author.toString(),
      embeds: [embed],
      components: [new MessageActionRow().addComponents(button)],
    });
  },
};
