const { Command } = require("@sapphire/framework");

class BeepCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      name: "beep",
      aliases: ["b"]
    })
  }

  async messageRun(message) {
    const msg = await message.channel.send("Beep!");
    await msg.edit("Boop!");
  }
}

module.exports = { BeepCommand: BeepCommand };