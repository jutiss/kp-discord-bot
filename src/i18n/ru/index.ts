import type { BaseTranslation } from '../i18n-types';

const ru: BaseTranslation = {
  commands: {
    movies: {
      description: 'Cписок фильмов',
    },
    moviesWatched: {
      description: 'Cписок просмотренных фильмов (показывается только вам)',
      notFound: 'Просмотренных фильмов не найдено.',
    },
    deleteMovie: {
      description: 'Удалить фильм из списка просмотра',
      success: 'Фильм **{name}** удален из списка просмотра.',
    },
    addMovie: {
      description: 'Добавить фильм в список к просмотру',
      success: 'Фильм **{name}** добавлен в список.',
    },
    addMovieToWatched: {
      description: 'Пометить фильм просмотренным',
      success: 'Фильм **{name}** помечен просмотренным.',
    },
    announceMovie: {
      description: 'Анонсировать фильм на сегодня',
      message: 'Фильм на сегодня',
    },
  },
  movies: {
    toWatch: 'Фильмы к просмотру',
    watched: 'Просмотренные фильмы',
    empty: 'Список фильмов пуст.',
    notFound: 'Не удалось найти фильм с таким названием.',
    notFoundOrWatched: 'Фильм не найден или уже просмотрен.',
    fields: {
      name: 'Название',
      year: 'Год выхода',
      len: 'Продолжительность',
      genres: 'Жанры',
      ratingIMDB: 'Рейтинг IMDB',
      ratingKP: 'Рейтинг КП',
      suggestedBy: 'Предложил(а)',
    },
  },
  forbidden: 'У вас должна быть роль <@&{roleId}> для выполнения этой команды.',
  unknownError: 'Произошла неизвестная ошибка при выполнении команды.',
};

export default ru;
