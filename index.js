const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();

const disbut = require('discord-buttons');
disbut(client);

client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.discord = client.config.discord;
client.bot = client.config.bot;
client.ticket = client.config.ticket;
client.cmds = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categoria = new Discord.Collection();
client.descricao = new Discord.Collection();

/**
* @param {StringResolvable|APIMessage} [content='']
* @param {MessageOptions|MessageAdditions} [options={}]
* @param {string} [options?.messageID] - o ID da mensagem que será citada
* @param {boolean} [options?.mention] - caso deva mencionar o autor da mensagem
*/

const { APIMessage, Message } = require('discord.js')

Message.prototype.quote = async function (content, options) {
    const message_reference = {
        message_id: (
            !!content && !options
                ? typeof content === 'object' && content.messageID
                : options && options.messageID
        ) || this.id,
        message_channel: this.channel.id
    }

    const allowed_mentions = {
        parse: ['users', 'roles', 'everyone'],
        replied_user: typeof content === 'object' ? content && +content.mention : options && +options.mention
    }

    const { data: parsed, files } = await APIMessage
        .create(this, content, options)
        .resolveData()
        .resolveFiles()

    this.client.api.channels[this.channel.id].messages.post({
        data: { ...parsed, message_reference, allowed_mentions },
        files
    })
}

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        client.cmds.set(command.info.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of events) {
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client, disbut));
};

client.login(client.bot.token);