import config from '../config';
import { BaseCommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { kinopoiskService, prismaService } from '../services';
import { makeFilmEmbed } from '../helpers';
import { trans } from '../i18n';

export default {
  data: new SlashCommandBuilder()
    .setName('announce-movie')
    .setDescription(trans.commands.announceMovie.description())
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

    const kpFilm = await kinopoiskService.getFilmsById(movie.kinopoiskId);
    const embed = makeFilmEmbed(movie, kpFilm);

    await interaction.reply({
      allowedMentions: { roles: [config.discordRoleId] },
      content: `${trans.commands.announceMovie.message()} <@&${config.discordRoleId}>`,
      embeds: [embed],
    });
  },
};
