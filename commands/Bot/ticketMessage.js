const Discord = require("discord.js");
module.exports.run = async (client, message, args, disbut) => {

    if(!message.member.hasPermission("ADMINISTRATOR"))return;

    let button = new disbut.MessageButton()
        .setStyle('green')
        .setEmoji(client.ticket.emoji_abrir)
        .setID('open_ticket')

    const embed = new Discord.MessageEmbed()
        .setDescription(client.ticket.mensagem_abrir)
        .setColor([54, 57, 63]);

    message.channel.send({embed: embed, buttons: button});

}

module.exports.info = {
    name: "ticketsetup",
    aliases: []
}
