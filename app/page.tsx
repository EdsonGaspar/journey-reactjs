import Link from "next/link";

export default function Home() {
  const tsx_content = "TSX ou JSX ";
  const age = 28;
  const likes = ["Reactjs", "Nextjs", "TailwindCss"];
  const isTrue = false;

  return (
    <div id="Container-principal">
      <h1 id="primeiro-titulo">{tsx_content} é optímo de mais.</h1>
      <h2>{age}</h2>
      <h3>{likes}</h3>
      {String(isTrue)}
      {isTrue ? (
        <ul className="flex gap-2.5">
          {likes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <h2>Nao existe elemento na lista</h2>
      )}
      <Link href={"/pets"} className="border p-2 ml-2.5">
        Ir
      </Link>
      <Link href={"/filmes"} className="border p-2 ml-2.5">
        Filmes
      </Link>
      <Link href={"./pessoa"}>Pessoa</Link>
    </div>
  );
}
