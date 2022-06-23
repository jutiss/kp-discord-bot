// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'ru'

export type Locales =
	| 'ru'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	commands: {
		movies: {
			/**
			 * Cписок фильмов
			 */
			description: string
		}
		moviesWatched: {
			/**
			 * Cписок просмотренных фильмов (показывается только вам)
			 */
			description: string
			/**
			 * Просмотренных фильмов не найдено.
			 */
			notFound: string
		}
		deleteMovie: {
			/**
			 * Удалить фильм из списка просмотра
			 */
			description: string
			/**
			 * Фильм **{name}** удален из списка просмотра.
			 * @param {unknown} name
			 */
			success: RequiredParams<'name'>
		}
		addMovie: {
			/**
			 * Добавить фильм в список к просмотру
			 */
			description: string
			/**
			 * Фильм **{name}** добавлен в список.
			 * @param {unknown} name
			 */
			success: RequiredParams<'name'>
		}
		addMovieToWatched: {
			/**
			 * Пометить фильм просмотренным
			 */
			description: string
			/**
			 * Фильм **{name}** помечен просмотренным.
			 * @param {unknown} name
			 */
			success: RequiredParams<'name'>
		}
		announceMovie: {
			/**
			 * Анонсировать фильм на сегодня
			 */
			description: string
			/**
			 * Фильм на сегодня
			 */
			message: string
		}
	}
	movies: {
		/**
		 * Фильмы к просмотру
		 */
		toWatch: string
		/**
		 * Просмотренные фильмы
		 */
		watched: string
		/**
		 * Список фильмов пуст.
		 */
		empty: string
		/**
		 * Не удалось найти фильм с таким названием.
		 */
		notFound: string
		/**
		 * Фильм не найден или уже просмотрен.
		 */
		notFoundOrWatched: string
		fields: {
			/**
			 * Название
			 */
			name: string
			/**
			 * Год выхода
			 */
			year: string
			/**
			 * Продолжительность
			 */
			len: string
			/**
			 * Жанры
			 */
			genres: string
			/**
			 * Рейтинг IMDB
			 */
			ratingIMDB: string
			/**
			 * Рейтинг КП
			 */
			ratingKP: string
			/**
			 * Предложил(а)
			 */
			suggestedBy: string
		}
	}
	/**
	 * У вас должна быть роль <@&{roleId}> для выполнения этой команды.
	 * @param {unknown} roleId
	 */
	forbidden: RequiredParams<'roleId'>
	/**
	 * Произошла неизвестная ошибка при выполнении команды.
	 */
	unknownError: string
}

export type TranslationFunctions = {
	commands: {
		movies: {
			/**
			 * Cписок фильмов
			 */
			description: () => LocalizedString
		}
		moviesWatched: {
			/**
			 * Cписок просмотренных фильмов (показывается только вам)
			 */
			description: () => LocalizedString
			/**
			 * Просмотренных фильмов не найдено.
			 */
			notFound: () => LocalizedString
		}
		deleteMovie: {
			/**
			 * Удалить фильм из списка просмотра
			 */
			description: () => LocalizedString
			/**
			 * Фильм **{name}** удален из списка просмотра.
			 */
			success: (arg: { name: unknown }) => LocalizedString
		}
		addMovie: {
			/**
			 * Добавить фильм в список к просмотру
			 */
			description: () => LocalizedString
			/**
			 * Фильм **{name}** добавлен в список.
			 */
			success: (arg: { name: unknown }) => LocalizedString
		}
		addMovieToWatched: {
			/**
			 * Пометить фильм просмотренным
			 */
			description: () => LocalizedString
			/**
			 * Фильм **{name}** помечен просмотренным.
			 */
			success: (arg: { name: unknown }) => LocalizedString
		}
		announceMovie: {
			/**
			 * Анонсировать фильм на сегодня
			 */
			description: () => LocalizedString
			/**
			 * Фильм на сегодня
			 */
			message: () => LocalizedString
		}
	}
	movies: {
		/**
		 * Фильмы к просмотру
		 */
		toWatch: () => LocalizedString
		/**
		 * Просмотренные фильмы
		 */
		watched: () => LocalizedString
		/**
		 * Список фильмов пуст.
		 */
		empty: () => LocalizedString
		/**
		 * Не удалось найти фильм с таким названием.
		 */
		notFound: () => LocalizedString
		/**
		 * Фильм не найден или уже просмотрен.
		 */
		notFoundOrWatched: () => LocalizedString
		fields: {
			/**
			 * Название
			 */
			name: () => LocalizedString
			/**
			 * Год выхода
			 */
			year: () => LocalizedString
			/**
			 * Продолжительность
			 */
			len: () => LocalizedString
			/**
			 * Жанры
			 */
			genres: () => LocalizedString
			/**
			 * Рейтинг IMDB
			 */
			ratingIMDB: () => LocalizedString
			/**
			 * Рейтинг КП
			 */
			ratingKP: () => LocalizedString
			/**
			 * Предложил(а)
			 */
			suggestedBy: () => LocalizedString
		}
	}
	/**
	 * У вас должна быть роль <@&{roleId}> для выполнения этой команды.
	 */
	forbidden: (arg: { roleId: unknown }) => LocalizedString
	/**
	 * Произошла неизвестная ошибка при выполнении команды.
	 */
	unknownError: () => LocalizedString
}

export type Formatters = {}