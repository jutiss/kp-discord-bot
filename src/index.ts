import fs from 'fs';
import path from 'path';
import config from './config';
import { Client, Collection, Intents, Interaction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { trans } from './i18n';

// Create a new client instance
const client = new Client({
  intents: [Intents.FLAGS.GUILDS],
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith('.js'));

const main = async () => {
  // Collect all commands files
  for (const file of commandFiles) {
    const command: { default: { data: SlashCommandBuilder } } = await import(
      path.join(__dirname, `commands/${file}`)
    );
    client.commands.set(command.default.data.name, command.default);
  }

  client.once('ready', () => {
    console.info('Bot is ready!');
  });

  client.on('interactionCreate', async (interaction: Interaction) => {
    if (!interaction.isCommand() || !interaction.member) return;

    // @ts-ignore
    const roles: Collection<unknown, any> = interaction.member.roles?.cache;

    if (!roles.has(config.discordRoleId)) {
      await interaction.reply({
        content: trans.forbidden({ roleId: config.discordRoleId }),
        ephemeral: true,
      });

      return;
    }

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction);
    }
    catch (error) {
      await interaction.reply({
        content: error instanceof Error ? error.message : trans.unknownError(),
        ephemeral: true,
      });
    }
  });

  client.login(config.discordToken);
};

main();
