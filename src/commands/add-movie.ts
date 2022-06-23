import { BaseCommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { kinopoiskService, prismaService } from '../services';
import { trans } from '../i18n';

export default {
  data: new SlashCommandBuilder()
    .setName('add-movie')
    .setDescription(trans.commands.addMovie.description())
    .addStringOption((option) =>
      option.setName('query').setDescription(trans.movies.fields.name()).setRequired(true)
    ),
  async execute(interaction: BaseCommandInteraction) {
    if (!interaction.isCommand()) return;

    const query = interaction.options.getString('query', true);
    const { films } = await kinopoiskService.getFilmsByQuery(query);

    if (films.length < 1) {
      throw new Error(trans.movies.notFound());
    }

    const movie = {
      kinopoiskId: films[0].filmId,
      title: films[0].nameRu,
      suggestedBy: interaction.user.id,
      viewedAt: null,
    };

    await prismaService.movie.upsert({
      where: {
        kinopoiskId: movie.kinopoiskId,
      },
      create: movie,
      update: movie,
    });

    await interaction.reply(trans.commands.addMovie.success({ name: movie.title }));
  },
};
