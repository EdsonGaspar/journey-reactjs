import { ComponentMovie } from "@/components/filmes/movie/movie";
import Link from "next/link";

export default function PageMovies() {
  return (
    <div>
      <h2>Filmes mais vistos</h2>

      <ComponentMovie />
      <Link href={"/"}>Voltar</Link>
    </div>
  );
}
