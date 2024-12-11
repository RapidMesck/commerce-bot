
import { Client } from "discord.js";
import { config } from "./config";
import { loadEvents } from "./deploys/events";

const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

loadEvents(client);

client.login(config.DISCORD_TOKEN);
