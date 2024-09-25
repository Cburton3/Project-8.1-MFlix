import { FiltroPeliculas, Pelicula, TipoGenero } from "./modelo";

export const filtrarPeliculasPorGenero = (
    peliculas: Pelicula[],
    genero?: TipoGenero
): Pelicula[] => peliculas.filter((pelicula) => pelicula.genero === genero);// i think the last genero was the same as 'animacion etc...'
//RE filter creates a new array if pass a test provided by a function.  It takes each pelicula (movie) object from the array and checks if its genero property (genre) matches the genero variable.
// it checks if the genero property of the movie object is equal to the value stored in the genero variable.
//If the genero property matches the genero variable, the movie object is included in the new array returned by filter().

export const filtrarPeliculasPorPremio = (
    peliculas: Pelicula[],
    //caracteristica : premioGalardon;
): Pelicula[] => peliculas.filter((pelicula) => pelicula.premioGalardon === true);

const filtrarPeliculasMasVistas = (
peliculas: Pelicula[],
): Pelicula[] => peliculas.filter((pelicula) => pelicula.masVisto);

const ordenarPeliculasPorCalificacion = (
    peliculas: Pelicula[],
    ): Pelicula[] => peliculas.sort((peliculaA, peliculaB) => peliculaB.calificacionImdb - peliculaA.calificacionImdb);


export const filtrarPeliculas = (
    peliculas: Pelicula[],
    filtro?: FiltroPeliculas
): Pelicula[] => {
    if(!filtro) return peliculas;

    switch(filtro.caracteristica) { //by adding these param, only these strings  can beused
        case 'genero': 
        return filtrarPeliculasPorGenero(peliculas, filtro.genero);
        case 'premios':
        return filtrarPeliculasPorPremio(peliculas); //no second param here and none used in fx
        case 'masVistas':
        return filtrarPeliculasMasVistas(peliculas);
        case 'calificacion':
        return ordenarPeliculasPorCalificacion(peliculas);
    
        default: 
            return peliculas;
    };   //this returns a list of pelis en funcion a lo que digamos que haga que usa el interface esa
};


