import { $fetch, SearchParams } from 'ohmyfetch';

interface KPRequest {
  method: string;
  params?: SearchParams;
}

interface KPFilmItemGenre {
  genre: string;
}

export interface KPFilmItem {
  filmId: number;
  nameRu: string;
  nameEn: string;
  description: string;
  posterUrl: string;
  year: string;
  filmLength: string;
  genres: KPFilmItemGenre[];
  rating: string;
}

export interface KPFilmDetails {
  kinopoiskId: number;
  nameRu: string;
  nameOriginal: string;
  description: string;
  webUrl: string;
  posterUrl: string;
  year: number;
  filmLength: number;
  genres: KPFilmItemGenre[];
  ratingKinopoisk: number;
  ratingImdb: number;
}

interface KPSeachFilmResult {
  keyword: string;
  pagesCount: number;
  films: KPFilmItem[];
  searchFilmsCountResult: number;
}

export default class KinopoiskAPI {
  /**
   * @readonly
   */
  private endpoint: string;

  /**
   * @readonly
   */
  private apiKey: string;

  constructor(apiKey: string) {
    this.endpoint = 'https://kinopoiskapiunofficial.tech/api';
    this.apiKey = apiKey;
  }

  public getFilmsByQuery(keyword: string) {
    return this.request<KPSeachFilmResult>('/v2.1/films/search-by-keyword', {
      method: 'GET',
      params: {
        keyword,
      },
    });
  }

  public getFilmsById(id: number) {
    // Using the v2.2 endpoint here because for some reason
    // the previous version did not contain all the movie details
    return this.request<KPFilmDetails>(`/v2.2/films/${id}`, {
      method: 'GET',
    });
  }

  private request<T>(path: string, options: KPRequest): Promise<T> {
    const { method, params } = options;

    return $fetch<T>(this.endpoint + path, {
      method,
      headers: {
        'X-API-KEY': this.apiKey,
      },
      params,
    });
  }
}
