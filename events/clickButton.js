const Discord = require("discord.js");
const applyPlaceholders = require('../functions/placeholder');
module.exports = async (client, disbut, button) => {

    if (button.id.includes('close_ticket')) {
        button.defer();
        button.guild.channels.cache.get(await button.id.split('_').slice(2).toString()).delete()
    }

    if (button.id !== 'open_ticket') return;

    let member = button.clicker.member;

    let tickets = button.guild.channels.cache.filter(ch => ch.name.includes(member.id));

    if (tickets.size) return button.defer();

    const channel = await button.guild.channels.create(`ticket-${member.id}`, {
        type: 'text', parent: button.channel.parent.id 
    });

    channel.overwritePermissions([
        {
            id: button.guild.id,
            deny: Discord.Permissions.ALL
        },
        {
            id: member.id,
            allow: [52224]
        },
        {
            id: client.ticket.cargo_id,
            allow: [52224]
        }
    ]);

    let msg = new Discord.MessageEmbed()
        .setDescription(applyPlaceholders({user: member, member: member.user.tag, usuario: member.user.username, servidor: button.guild.name}, client.ticket.mensagem))
        .setColor([54,57,63])
        .setFooter("Para fechar o ticket clique em "+client.ticket.emoji_fechar)
        .setTimestamp();

    let closeButton = new disbut.MessageButton()
        .setStyle('red')
        .setEmoji(client.ticket.emoji_fechar)
        .setID('close_ticket_' + channel.id);

    channel.send({ embed: msg, buttons: closeButton });

    await button.defer();
}