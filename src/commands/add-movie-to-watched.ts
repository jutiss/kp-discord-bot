import { BaseCommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { prismaService } from '../services';
import { trans } from '../i18n';

export default {
  data: new SlashCommandBuilder()
    .setName('add-movie-to-watched')
    .setDescription(trans.commands.addMovieToWatched.description())
    .addStringOption((option) =>
      option.setName('query').setDescription(trans.movies.fields.name().toString()).setRequired(true)
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
      throw new Error(trans.movies.notFound());
    }

    await prismaService.movie.update({
      where: {
        id: movie.id,
      },
      data: {
        viewedAt: new Date(),
      },
    });

    await interaction.reply({
      content: trans.commands.addMovieToWatched.success({ name: movie.title }),
      ephemeral: true,
    });
  },
};
