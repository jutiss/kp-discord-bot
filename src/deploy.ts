import fs from 'fs';
import path from 'path';
import config from './config';
import { REST } from '@discordjs/rest';
import { Routes, RESTPostAPIApplicationCommandsJSONBody } from 'discord-api-types/v9';
import { SlashCommandBuilder } from '@discordjs/builders';

const commands: RESTPostAPIApplicationCommandsJSONBody[] = [];

// Collect all commands files
const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(file => file.endsWith('.js'));

const main = async () => {
  for (const file of commandFiles) {
    const command: { default: { data: SlashCommandBuilder } } = await import(path.join(__dirname, `commands/${file}`));
    commands.push(command.default.data.toJSON());
  }

  const rest = new REST({ version: '9' }).setToken(config.discordToken);

  try {
    await rest.put(Routes.applicationGuildCommands(config.discordClientId, config.discordGuildId), { body: commands });
    console.log('Successfully registered application commands.');
  }
  catch (err) {
    console.error(err);
  }
};

main();
