import { peliculas } from "./datos";

import { pintarListaPeliculas } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
 pintarListaPeliculas(peliculas, {titulo: 'Todas las peliculas'}); //titulo de la seccion es todas las..., pelis is the array
 pintarListaPeliculas(peliculas, 
    {
        titulo: 'Peliculas de aventuras',
        filtro: {genero: 'Aventuras', caracteristica: 'genero'},
 });
 pintarListaPeliculas(peliculas, 
    {
        titulo: 'Peliculas Familiares',
        filtro: {genero: 'Familiar', caracteristica: 'genero'},
 });
 pintarListaPeliculas(peliculas, 
    {
        titulo: 'Peliculas de Animación',
        filtro: {genero: 'Animacion', caracteristica: 'genero'},
 });

 pintarListaPeliculas(peliculas, 
    {
        titulo: 'Peliculas Premiadas',
        filtro: {caracteristica: 'premios'},
        
 });
 pintarListaPeliculas(peliculas, 
    {
        titulo: 'Más Vistas',
        filtro: {caracteristica: 'masVistas'},
 });
 pintarListaPeliculas(peliculas, 
    {
        titulo: 'Mejor calificadas',
        filtro: {caracteristica: 'calificacion'},
 });
});