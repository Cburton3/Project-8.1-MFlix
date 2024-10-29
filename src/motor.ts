import { FilterMovies, Movie, movieGenre } from "./model";

export const filterMoviesByGenre = (
    movies: Movie[],
    genre?: movieGenre
): Movie[] => movies.filter((movie) => movie.genre === genre);

export const filterMoviesbyAwards = (
    movies: Movie[],
): Movie[] => movies.filter((movie) => movie.galardonAward === true);

const FilterMostSeenMovies = (
movies: Movie[],
): Movie[] => movies.filter((movie) => movie.mostSeen);

const rankMovies = (
    movies: Movie[],
    ): Movie[] => movies.sort((movieA, movieB) => movieB.rankingImdb - movieA.rankingImdb);


export const filterMovies = (
    movies: Movie[],
    filter?: FilterMovies
): Movie[] => {
    if(!filter) return movies;

    switch(filter.characteristic) { 
        case 'genero': 
        return filterMoviesByGenre(movies, filter.genre);
        case 'premios':
        return filterMoviesbyAwards(movies); 
        case 'masVistas':
        return FilterMostSeenMovies(movies);
        case 'calificacion':
        return rankMovies(movies);
    
        default: 
            return movies;
    };  
};


