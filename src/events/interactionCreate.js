const {
  Interaction,
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  Permissions,
} = require("discord.js");
const { ticket } = require("../config.js");
const { applyTemplates } = require("../utils/utils");

module.exports = {
  name: "interactionCreate",
  async execute(client, interaction) {
    if (!interaction.isButton()) return;

    const cases = {
      openTicket: async () => {
        const { member, guild } = interaction;
        const tickets = guild.channels.cache.filter((channel) =>
          channel.name.includes(member.user.id)
        );

        if (tickets.size > 0) {
          const ticket = tickets.first();
          await member.user.send(
            `You already have a ticket open. ${ticket.name}`
          );
          return;
        }

        const channel = await guild.channels.create(
          `ticket-${member.user.id}`,
          {
            type: "GUILD_TEXT",
            parent: ticket.categoryId,
            permissionOverwrites: [
              {
                id: guild.id,
                deny: Permissions.ALL,
              },
              {
                id: member.user.id,
                allow: [
                  Permissions.FLAGS.VIEW_CHANNEL,
                  Permissions.FLAGS.SEND_MESSAGES,
                  Permissions.FLAGS.READ_MESSAGE_HISTORY,
                ],
              },
              {
                id: ticket.roleId,
                allow: [
                  Permissions.FLAGS.VIEW_CHANNEL,
                  Permissions.FLAGS.SEND_MESSAGES,
                  Permissions.FLAGS.READ_MESSAGE_HISTORY,
                ],
              },
            ],
          }
        );

        const embed = new MessageEmbed()
          .setDescription(
            applyTemplates(
              {
                user: member.user.toString(),
                tag: member.user.tag,
                username: member.user.username,
                server: guild.name,
              },
              ticket.welcome
            )
          )
          .setColor("#2f3136")
          .setFooter(
            `${member.user.tag} | Para fechar o ticket, clique em ${ticket.emojiClose}`
          )
          .setTimestamp();

        const closeButton = new MessageButton()
          .setStyle("DANGER")
          .setEmoji(ticket.emojiClose)
          .setCustomId("closeTicket");

        await channel.send({
          embeds: [embed],
          components: [new MessageActionRow().addComponents(closeButton)],
        });

        await interaction.reply({
          content: `Ticket aberto com sucesso!`,
          ephemeral: true,
        });
      },
      closeTicket: async () => {
        await interaction.channel.delete().catch(() => {});
      },
    };

    const handler = cases[interaction.customId];
    if (handler) await handler();
  },
};
