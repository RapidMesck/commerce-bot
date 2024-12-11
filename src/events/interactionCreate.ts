import { Events, Interaction, MessageFlags } from "discord.js";
import { commands } from "../commands";

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction: Interaction) {
        if (interaction.isCommand()) {
          const { commandName } = interaction;
          if (commands[commandName as keyof typeof commands]) {
            commands[commandName as keyof typeof commands].execute(interaction);
          }
        }
	},
};
