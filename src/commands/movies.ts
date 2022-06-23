import { BaseCommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { prismaService } from '../services';
import { arrayToList } from '../helpers';
import { trans } from '../i18n';

export default {
  data: new SlashCommandBuilder()
    .setName('movies')
    .setDescription(trans.commands.movies.description()),

  async execute(interaction: BaseCommandInteraction) {
    if (!interaction.isCommand()) return;

    const data = await prismaService.movie.findMany({
      where: {
        viewedAt: null,
      },
    });

    if (data.length < 1) {
      throw new Error(trans.movies.empty());
    }

    const list = arrayToList(data, 'title');

    await interaction.reply({
      content: `**${trans.movies.toWatch()}**:\n${list}`,
      ephemeral: true,
    });
  },
};
