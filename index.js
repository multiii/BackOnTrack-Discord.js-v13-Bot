const { SapphireClient } = require("@sapphire/framework");

const bot = new SapphireClient({
  defaultPrefix: "&",
  caseInsensitiveCommands: true,
  intents: [
    'GUILDS',
    'GUILD_MEMBERS',
    'GUILD_BANS',
    'GUILD_EMOJIS_AND_STICKERS',
    'GUILD_VOICE_STATES',
    'GUILD_MESSAGES',
    'GUILD_MESSAGE_REACTIONS',
    'DIRECT_MESSAGES',
    'DIRECT_MESSAGE_REACTIONS'
  ]
});

async function main() {
  await bot.login(process.env.TOKEN);
  console.log("Ready!")
}

main()