const { Command } = require("@sapphire/framework");

class MathsCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      name: "maths",
      description: "Maths main command",
      chatInputCommand: {
        guildIds: ["722009125780979742"],
      }
    });    
  }

  registerApplicationCommands(registry) {
    registry.registerChatInputCommand(builder => {
      builder
      .setName("maths")
      .setDescription("Maths main command")
      .addSubcommand(
        command => command
        .setName("add")
        .setDescription("Adds 2 numbers!")
        .addIntegerOption(
          o => o
          .setName("x")
          .setDescription("The first argument")
          .setRequired(true)
        )
        .addIntegerOption(
          o => o
          .setName("y")
          .setDescription("The second argument")
          .setRequired(true)
        )
      )
      .addSubcommand(
        command => command
        .setName("sub")
        .setDescription("Subtracts 2 numbers!")
        .addIntegerOption(
          o => o
          .setName("x")
          .setDescription("The first argument")
          .setRequired(true)
        )
        .addIntegerOption(
          o => o
          .setName("y")
          .setDescription("The second argument")
          .setRequired(true)
        )
      )
    });
  }

  async add(interaction) {
    const x = interaction.options.getInteger("x");
    const y = interaction.options.getInteger("y");

    const z = x + y;

    await interaction.reply(`The sum of ${x} and ${y} is ${z}`);    
  }

  async sub(interaction) {
    const x = interaction.options.getInteger("x");
    const y = interaction.options.getInteger("y");

    const z = x - y;

    await interaction.reply(`${x} minus ${y} is equal to ${z}`);
  }

  async chatInputRun(interaction) {
    const subcommand = interaction.options.getSubcommand(true);

    if (subcommand === "add") {
      return await this.add(interaction);
    }
    else if (subcommand === "sub") {
      return await this.sub(interaction);
    }
  };
}

module.exports = { MathsCommand }