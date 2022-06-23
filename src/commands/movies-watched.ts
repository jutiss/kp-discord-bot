import { BaseCommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { prismaService } from '../services';
import { arrayToList } from '../helpers';
import { trans } from '../i18n';

export default {
  data: new SlashCommandBuilder()
    .setName('movies-watched')
    .setDescription(trans.commands.moviesWatched.description()),

  async execute(interaction: BaseCommandInteraction) {
    if (!interaction.isCommand()) return;

    const data = await prismaService.movie.findMany({
      where: {
        viewedAt: { not: null },
      },
      orderBy: {
        viewedAt: 'asc',
      },
    });

    if (data.length < 1) {
      throw new Error(trans.commands.moviesWatched.notFound());
    }

    const list = arrayToList(data, 'title');

    await interaction.reply({
      content: `**${trans.movies.watched()}**:\n${list}`,
      ephemeral: true,
    });
  },
};
