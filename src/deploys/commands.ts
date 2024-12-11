import { REST, Routes } from "discord.js";
import { config } from "../config";
import { commands } from "../commands";

const commandsData = Object.values(commands).map((command) => command.data);

const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);

export async function deployCommands() {
  try {
    console.log("REFRESH Slash");

    await rest.put(
      Routes.applicationGuildCommands(config.CLIENT_ID, config.GUILD_ID),
      {
        body: commandsData,
      }
    );

    console.log("RELOAD Slash");
  } catch (error) {
    console.error(error);
  }
}