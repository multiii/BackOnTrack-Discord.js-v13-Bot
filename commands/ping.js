const { Command } = require("@sapphire/framework");

class PingCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      name: "ping",
      description: "Pong!",
      aliases: ["p"],
    });    
  }

  async messageRun(message) {
    await message.channel.send("Pong!")
  }
}

module.exports = { PingCommand: PingCommand }

// new PingCommand(context, options)