const { Command } = require("@sapphire/framework");

class PingCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      name: "ping",
      description: "Pong!",
      chatInputCommand: {
        guildIds: ["722009125780979742"]
      }
    });    
  }

  async chatInputRun(interaction) {
    await interaction.reply({
      content: "Pong!",
      ephemeral: true
    });
  }
}

module.exports = { PingCommand: PingCommand }

// new PingCommand(context, options)