module.exports = {
  emojis: {
    error: "❌",
    success: "✅",
  },
  discord: {
    prefix: ".",
    presence: {
      status: "online",
      activities: [{
        name: "with my tickets",
        type: "PLAYING",
      }],
    },
  },
  auth: {
    token: "",
  },
  ticket: {
    emojiOpen: "🎫", // [padrão: 🎫] Emoji para abrir o ticket. Caso personalizado, use o ID do emoji.
    emojiClose: "🔐", // [padrão: 🔐] Emoji para fechar o ticket. Caso personalizado, use o ID do emoji.
    roleId: "851924418221572166", // ID do cargo que poderá ver os tickets.
    categoryId: "904877408434393088", // ID da categoria que será criada os tickets.
    message: "Para abrir um ticket clique em 🎫",
    welcome:
      "Olá {user}, seja bem-vindo ao {server}. Em alguns instantes um moderador irá ajuda-lo.",

    /**
     * Placeholders do campo "welcome":
     * {user} - Menção do usuário (ex: @user)
     * {tag} - Tag do autor (ex: user#0000)
     * {username} - Nome do autor (ex: user)
     * {server} - Nome do servidor (ex: server)
     */
  },
};
