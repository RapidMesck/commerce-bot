import { Client } from "discord.js";
import fs from "node:fs";
import path from "node:path";

export function loadEvents(client: Client) {
    const isDevelopment = process.env.NODE_ENV === 'development';
    const fileExtension = isDevelopment ? '.ts' : '.js';

    const eventsPath = path.join(__dirname, "../events");
    const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith(fileExtension));

    for (const file of eventFiles) {
        const filePath = path.join(eventsPath, file);
        import(filePath).then((module) => {
        const event = module.event;
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, client));
        } else {
            client.on(event.name, (...args) => event.execute(...args, client));
        }
        });
    }
}
