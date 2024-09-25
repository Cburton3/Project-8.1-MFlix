export interface Pelicula {
    titulo: string;
    resumen: string;
    genero: string;
    masVisto: boolean;
    calificacionImdb: number;
    premioGalardon: boolean;
    fechaEstreno: Date;
    imagen: string;
} 

export const nombreClases = {
    peliculas: 'peliculas',
    listaPeliculas: 'lista-peliculas',
    peliculasContenedor: 'peliculas-contenedor',
    pelicula: 'pelicula', 
};

export type TipoFlecha = 'izquierda' | 'derecha';//if use a const, could be any/void but this is more specific

export type TipoGenero = 'Familiar' | 'Aventuras' | 'Animacion';//like a caja with different values. 

type TipoCaracteristica = 'genero' | 'masVistas' | 'premios'| 'calificacion'; //so here and above we are creating our own TYPE of data that can only be this

//type premioGalardon = 'true' | 'false';

export interface FiltroPeliculas {//plano de la casa
    genero?: TipoGenero;
    //TipoGenero: 'Familiar' | 'Aventuras' | 'Animación'; //could have done this but havent to make it more simple. (yer its the same)
    caracteristica: TipoCaracteristica
    // pelisPremiadas?:
};

//interfaces are for the TYPE of data being used. 
//export type TIpo... is the limit exactly what that data can be as a const could be void/any etc. Its beign more specific

export interface ListaPeliculasConfiguracion {
    titulo: string;
    filtro?: FiltroPeliculas;//the ? indicate that this property is optional. it may or maynot have it. if it does have it, then it must be of type FiltroPeliculas
};


// 1) add new list of pelis that have a premium y ordenarlas por calificacion
//in motor make function that returns a list of pelis with premium que sea true

// 2) a new list of pelis mas vistas, masVisto is true

// 3) ordenar por calificacion, una fx that returns lista de pelis ordenadas so property calificacion... sea mayor que la otra (use sort)

//4) modify el type tipoLista and add precios masVistas and calidcacion

//5 add a new switch function to filtrarPelicas

//6 in shell add the new lista de pelis (this one i can do!!)

