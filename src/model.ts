export interface Movie {
    title: string;
    summery: string;
    genre: string;
    mostSeen: boolean;
    rankingImdb: number;
    galardonAward: boolean;
    releaseDate: Date;
    image: string;
} 

export const classNames = {
    movies: 'peliculas',
    movieList: 'lista-peliculas',
    moviesContainer: 'peliculas-contenedor',
    movie: 'pelicula', 
};

export type arrowType = 'izquierda' | 'derecha';

export type movieGenre = 'Familiar' | 'Aventuras' | 'Animacion'; 

type TipoCaracteristica = 'genero' | 'masVistas' | 'premios'| 'calificacion';

export interface FilterMovies {
    genre?: movieGenre;
    characteristic: TipoCaracteristica
};

export interface movieListConfig {
    title: string;
    filter?: FilterMovies;
};