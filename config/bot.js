module.exports = {
    emojis: {

        error:          '❌',
        success:        '✅',

    },

    discord: {

        prefix:         '.',                                    // PREFIXO DO BOT
        activity:       'Online',                               // STATUS DO BOT https://prnt.sc/15zekf9
        status:         'idle'                                  // ESTADO DO BOT https://prnt.sc/15zen30
        /*
        idle = AUSENTE
        invisible = INVISIVEL
        online = ONLINE
        dnd = NAO PERTURBE
        */

    },

    bot: {

        token: "xxxxxxxxxxxxxxxxxx" // TOKEN DO SEU BOT

    },

    ticket: {

        emoji_abrir:    '🎟️',                                   // EMOJI PARA ABRIR TICKET (SOMENTE O ID DO EMOJI) CASO SEJA EMOJI PADRÃO COLOCA-LO EM FORMATO UNICODE
        mensagem_abrir: 'Para abrir um ticket clique em 🎟️',    // MENSAGEM MOSTRADA NA EMBED DE ABRIR TICKET
        cargo_id:       '855915058931302441',                    // ID DO CARGO QUE TERÁ ACESSO AOS TICKETS
        emoji_fechar:   '🔐',                                   // EMOJI PARA FECHAR OS TICKETS (SOMENTE O ID DO EMOJI) CASO SEJA EMOJI PADRÃO COLOCA-LO EM FORMATO UNICODE
        mensagem:       'Olá {usuario}, seja bem-vindo(a) ao {servidor}. Em alguns instantes um staff irá ajuda-lo.' /* 

        MENSAGEM MOSTRADA QUANDO O USUARIO ABRE UM TICKET EXEMPLO: 'Olá {user}, aguarde ate que um staff venha atende-lo'

        PLACEHOLDERS: 
        
        {user} = Menção do autor do ticket (Ex: @ph).
        {member} = Tag do autor do ticket (Ex: ph#0001).
        {usuario} = Usuário do autor do ticket (Ex: ph)
        {servidor} = Nome do servidor (Ex: Comunidade da Ravena).

        */
    }
};