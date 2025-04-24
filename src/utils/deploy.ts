import { REST, Routes } from "discord.js"
import { commands } from "../commands"
import { config } from "./config"

// This file is used to deploy the commands to the Discord API
const allCommands = Object.values(commands).map(commands => commands.data)

const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN)

export async function deployCommands({ guildId }: DeployCommandsProps) {
    try {
        console.log("Started refreshing application (/) commands.")

        await rest.put(Routes.applicationCommands(config.DISCORD_CLIENT_ID), {
            body: allCommands,
        })

        console.log("Successfully reloaded application (/) commands.")
    } catch (error) {
        console.error(error)
    }
}