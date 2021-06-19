const Discord = require("discord.js");
module.exports.run = async (client, message, args, disbut) => {

        let api = Math.round(client.ws.ping);

        message.quote(`${client.emotes.success} **|** ${api}ms`);


}

module.exports.info = {
    name: "ping",
    aliases: ["latencia"]
}
