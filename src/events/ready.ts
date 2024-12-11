import { Client } from "discord.js";
import { Events } from "discord.js";
import { deployCommands } from "../deploys/commands";

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client: Client) {
        await deployCommands();
        console.log(`Ready! Logged`);
	},
};
