import { MessageEmbed } from 'discord.js';
import { KPFilmDetails } from '../api/kinopoisk';
import { Movie } from '@prisma/client';
import { trans } from '../i18n';

/**
 * Returns unordered list of element
 *
 * @param {Array<T>} array
 * @param {string} label
 * @returns {string}
 */
export const arrayToList = <T, K extends keyof T>(array: Array<T>, label: K): string => {
  return array.map((m, index) => (index + 1) + `. ${m[label]}`).join('\n');
};

/**
 * Convert minutes to H:M format
 *
 * @param {number} minutes
 * @returns {string}
 */
const toHoursAndMinutes = (minutes: number): string => {
  const m = minutes % 60;
  const h = Math.floor(minutes / 60);

  const padTo2Digits = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  return `${padTo2Digits(h)}:${padTo2Digits(m)}`;
};

/**
 */
export const makeFilmEmbed = (movie: Movie, kpFilm: KPFilmDetails) => {
  return new MessageEmbed()
    .setTitle(`${kpFilm.nameRu} (${kpFilm.nameOriginal})`)
    .setURL(kpFilm.webUrl)
    .setDescription(kpFilm.description)
    .setImage(kpFilm.posterUrl)
    .setColor('#6441a3')
    .addFields(
      { name: trans.movies.fields.year(), value: `${kpFilm.year}`, inline: true },
      { name: trans.movies.fields.len(), value: toHoursAndMinutes(kpFilm.filmLength), inline: true },
      {
        name: trans.movies.fields.genres(),
        value: kpFilm.genres.map((g) => g.genre).join(', '),
        inline: true,
      },
      { name: trans.movies.fields.ratingIMDB(), value: `${kpFilm.ratingImdb}`, inline: true },
      { name: trans.movies.fields.ratingKP(), value: `${kpFilm.ratingKinopoisk}`, inline: true },
      { name: trans.movies.fields.suggestedBy(), value: `<@${movie.suggestedBy}>`, inline: true },
    );
};
