import { Movie, classNames, arrowType, movieListConfig } from "./model";
import { arrows } from "./constantes";
import { filterMovies } from "./motor";

const addArrow = (contenedor: HTMLDivElement, tipo: arrowType): void => {
  const arrowDiv = document.createElement("div");
  arrowDiv.className = `flecha-${tipo}`;
  const arrowImg = document.createElement("img");
  arrowImg.src = tipo === "izquierda" ? arrows.left : arrows.right;
  arrowDiv.appendChild(arrowImg);
  arrowDiv.addEventListener("click", () => {
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
  contenedor.appendChild(arrowDiv);
};
const createTitle = (titleSection: string): HTMLHeadingElement => {
  const titulo = document.createElement("h2");
  titulo.textContent = titleSection;
  return titulo;
};

const createContainer = (
  className: string,
  container: HTMLDivElement
): HTMLDivElement => {
  const div = document.createElement("div");
  div.classList.add(className); //add class
  div.id = className; //add id
  container.appendChild(div);
  return div;
};

const addTitle = (titleSection: string, container: HTMLDivElement): void => {
  const title = createTitle(titleSection);
  container.appendChild(title);
};

const showArrows = (movieContainer: HTMLDivElement): void => {
  addArrow(movieContainer, "izquierda");
  addArrow(movieContainer, "derecha");
};

const showMovie = (movie: Movie, movieContainer: HTMLDivElement): void => {
  const divPelicula = createContainer(classNames.movie, movieContainer);
  divPelicula.innerHTML = `
  <img src ="${movie.image}" alt="${movie.title}" />
  <h3>${movie.title}</h3>
  `;
};

const showMovies = (movies: Movie[], movieContainer: HTMLDivElement): void => {
  movies.forEach((pelicula) => {
    showMovie(pelicula, movieContainer);
  });
};

export const showMovieList = (
  movieList: Movie[],
  configuration: movieListConfig
): void => {
  const appDiv = document.getElementById("principal");
  if (appDiv && appDiv instanceof HTMLDivElement) {
    const createMovieDiv = createContainer(classNames.movies, appDiv);

    addTitle(configuration.title, createMovieDiv);

    const movieListDiv = createContainer(classNames.movieList, createMovieDiv);

    const movieContainerDiv = createContainer(
      classNames.moviesContainer,
      movieListDiv
    );

    showArrows(movieContainerDiv);

    const filteredMovies = filterMovies(movieList, configuration.filter);

    showMovies(filteredMovies, movieContainerDiv);
  } else {
    console.error("Element not found");
  }
};
