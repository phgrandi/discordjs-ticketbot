module.exports = async (client) => {

    console.log(`
    │ Useless cache cleared successfully.
    │
    │ Discord API successfully started.
    │
    │ Informations:
    │ → Commands: ${client.cmds.size}
    │ → Bot: ${client.user.tag}`);
    
    client.user.setStatus("idle");

    client.user.setActivity("Onraine");
};