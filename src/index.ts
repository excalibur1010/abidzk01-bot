import { Client } from "discord.js";
import { config } from "./utils/config";
import { commands } from "./commands";
import { deployCommands } from "./utils/deploy";

const bot = new Client({
    intents: ["Guilds", "GuildMessages", "MessageContent"],
});

bot.once("ready", () => {
    console.log(`Logged in as ${bot.user?.tag}`);
});

// This event triggers when the bot is added to a server
// and deploys the commands to that server
// This is useful for testing commands in a specific server before deploying them globally
// You can also use this to deploy commands to multiple servers
// by calling deployCommands with different guildIds
bot.on("guildCreate", async (guild) => {
    await deployCommands({ guildId: guild.id });
});

// This event triggers when the bot is removed from a server
// and deletes the commands from that server
bot.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) {
        return;
    }
    const { commandName } = interaction;
    if (commands[commandName as keyof typeof commands]) {
        commands[commandName as keyof typeof commands].execute(interaction);
    }
});

bot.login(config.DISCORD_TOKEN).then(() => {
    console.log("Bot is online!");
}).catch((error) => {
    console.error("Error logging in:", error);
});