import { BaseCommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { prismaService } from '../services';
import { trans } from '../i18n';

export default {
  data: new SlashCommandBuilder()
    .setName('delete-movie')
    .setDescription(trans.commands.deleteMovie.description())
    .addStringOption((option) =>
      option.setName('query').setDescription(trans.movies.fields.name()).setRequired(true)
    ),
  async execute(interaction: BaseCommandInteraction) {
    if (!interaction.isCommand()) return;

    const query = interaction.options.getString('query', true);

    const movie = await prismaService.movie.findFirst({
      where: {
        title: {
          search: `'${query}'`,
        },
        viewedAt: null,
      },
    });

    if (!movie) {
      throw new Error(trans.movies.notFoundOrWatched());
    }

    await prismaService.movie.delete({
      where: {
        id: movie.id,
      },
    });

    await interaction.reply(trans.commands.deleteMovie.success({ name: movie.title }));
  },
};
