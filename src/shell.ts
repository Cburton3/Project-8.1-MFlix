import { movies } from "./data";

import { showMovieList } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
 showMovieList(movies, {title: 'Todas las peliculas'});
 showMovieList(movies, 
    {
        title: 'Adventure Movies',
        filter: {genre: 'Aventuras', characteristic: 'genero'},
 });
 showMovieList(movies, 
    {
        title: 'Family Movies',
        filter: {genre: 'Familiar', characteristic: 'genero'},
 });
 showMovieList(movies, 
    {
        title: 'Animated Movies',
        filter: {genre: 'Animacion', characteristic: 'genero'},
 });

 showMovieList(movies, 
    {
        title: 'Award-winning Movies',
        filter: {characteristic: 'premios'},
        
 });
 showMovieList(movies, 
    {
        title: 'Most viewed',
        filter: {characteristic: 'masVistas'},
 });
 showMovieList(movies, 
    {
        title: 'Best rated',
        filter: {characteristic: 'calificacion'},
 });
});