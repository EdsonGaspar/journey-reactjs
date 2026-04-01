import Image from "next/image";
import { movies } from "./movies";

export function ComponentMovie() {
  const functionMoviDate = () => {
    return movies;
  };

  const movieDate = functionMoviDate();

  return (
    <ul>
      {movieDate.map((movie) => (
        <li key={movie.id}>
          <h3>Filme {movie.title}</h3>
          <p>Ano de lancamento {movie.year}</p>
          <p>Director do filme {movie.director}</p>
          <div>
            <p>Avaliacao {movie.rating}</p>
            <p>Duracao {movie.runtime} minutos</p>
          </div>
          <Image
            src={movie.poster}
            alt={movie.title}
            width={600}
            height={400}
          />
        </li>
      ))}
    </ul>
  );
}
