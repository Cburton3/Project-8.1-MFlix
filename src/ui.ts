import { Pelicula, nombreClases, TipoFlecha, ListaPeliculasConfiguracion } from "./modelo";
import { flechas } from "./constantes";
import { filtrarPeliculas } from "./motor";

const añadirFlecha = (contenedor: HTMLDivElement, tipo: TipoFlecha): void => {
  const divFlecha = document.createElement("div");
  divFlecha.className = `flecha-${tipo}`;
  const imgFlecha = document.createElement("img");
  imgFlecha.src = tipo === "izquierda" ? flechas.left : flechas.right;
  divFlecha.appendChild(imgFlecha);
  divFlecha.addEventListener("click", () => {
    if (tipo === "izquierda") {
      contenedor.scrollBy({
        left: -contenedor.clientWidth,
        behavior: "smooth",
      });
    } else {
      contenedor.scrollBy({
        left: contenedor.clientWidth,
        behavior: "smooth",
      });
    }
  });
  contenedor.appendChild(divFlecha);
};
const crearTitulo = (tituloSeccion: string): HTMLHeadingElement => {
  const titulo = document.createElement("h2");
  titulo.textContent = tituloSeccion;
  return titulo;
};

const crearContenedor = (nombreClase: string, contenedor: HTMLDivElement): HTMLDivElement => {
  const div = document.createElement("div");
  div.classList.add(nombreClase); //add class
  div.id = nombreClase; //add id
  contenedor.appendChild(div);
  return div;
}; //here we create a container,add the div with the list of pelis and give it an id. Returns the div

//asi era antes for comparison
// const listaPeliculas = document.createElement("div");
//   listaPeliculas.classList.add(nombreClase); //add class
//   listaPeliculas.id = nombreClase; //add id
//   return listaPeliculas;


const agregarTitulo = (
    tituloSeccion: string, 
    contenedor: HTMLDivElement
): void => {
  const titulo = crearTitulo(tituloSeccion);
  contenedor.appendChild(titulo);
};

const pintarFlechas = (peliculaContenedor: HTMLDivElement): void => {
  añadirFlecha(peliculaContenedor, 'izquierda');
  añadirFlecha(peliculaContenedor, 'derecha');
};

const pintarPelicula = (
  pelicula: Pelicula,
  peliculaContendor: HTMLDivElement
): void => {
  const divPelicula = crearContenedor(nombreClases.pelicula, peliculaContendor);
  divPelicula.innerHTML = `
  <img src ="${pelicula.imagen}" alt="${pelicula.titulo}" />
  <h3>${pelicula.titulo}</h3>
  `;
};

const pintarPeliculas = (
  peliculas: Pelicula[],
  peliculaContenedor: HTMLDivElement
) : void => {
peliculas.forEach((pelicula) => {
  pintarPelicula(pelicula, peliculaContenedor);
});
};

export const pintarListaPeliculas = (
  // tituloSeccion: string, //borrado as dentro de la config
  listaPeliculas: Pelicula[],
  configuracion: ListaPeliculasConfiguracion
): void => {
  //obtener el div principal
  const appDiv = document.getElementById("principal");
  //comprobar que existe
  if (appDiv && appDiv instanceof HTMLDivElement) {
    //crear un div para las peliculas
    const crearDivPeliculas = crearContenedor(nombreClases.peliculas, appDiv);
    //anadir el div de pelis al div principal
    //appDiv.appendChild(crearDivPeliculas); //a no hace falta

    //crear un titulo 
    agregarTitulo(configuracion.titulo, crearDivPeliculas);
    //borrado esta seccion cos replaced above
    //const titulo = crearTitulo(tituloSeccion); 
    //anadir el titulo al div de peliculas
    //crearDivPeliculas.appendChild(titulo);

    //crear un div lista de peliculas
    const divListaPeliculas = crearContenedor(nombreClases.listaPeliculas, crearDivPeliculas);
    //añadir div lista de pelis al div de pelis
    //crearDivPeliculas.appendChild(divListaPeliculas);

    //crear div contenedor de peliculas
    const divPeliculasContenedor = crearContenedor(
      nombreClases.peliculasContenedor, divListaPeliculas
    );
    //añadir div contenedor de pelis al div lista de pelis
    //divListaPeliculas.appendChild(divPeliculasContenedor); //borrado cos we aded the divListaPeliculas

    //anadir flechas
    pintarFlechas(divPeliculasContenedor);
    // añadirFlecha(divPeliculasContenedor, 'izquierda');
    // añadirFlecha(divPeliculasContenedor, 'derecha');

    const peliculasFiltradas = filtrarPeliculas(
      listaPeliculas, 
      configuracion.filtro);

    //pintar peliculas
    // listaPeliculas.forEach((pelicula) => {
    //   //crear div peli
    //   const divPelicula = crearContenedor(nombreClases.pelicula, divPeliculasContenedor); //this is a string cos there is no var called peli... its the name of the class. b adding second argument we can get rid of the append child
    //   //añadir datos a la pelicula
    //   divPelicula.innerHTML = 
    //   `<img src ="${pelicula.imagen}" alt="${pelicula.titulo}" />
    //   <h3>${pelicula.titulo}</h3>
    //   `;
      //anadir div peli al di comntenedor de pelis
      //divPeliculasContenedor.appendChild(divPelicula);
   // });
   pintarPeliculas(peliculasFiltradas, divPeliculasContenedor);
  } else {
    console.error("No se encontró el elemento");
  }
};

//create an obj that stores the names of the class's so that ifwe have to change a class name, we onl have to change in one place
