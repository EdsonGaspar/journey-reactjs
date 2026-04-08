//https://api.github.com/users/EdsonGaspar2
import useGitHubUser from "@/hooks/useGitHubUser";
import Image from "next/image";

export function GitHubUserApi(userName: string) {
  const { user, loading } = useGitHubUser(userName);

  return (
    <div>
      <div>{loading && <p>Carregando...</p>}</div>
      <div>
        <h2>{user?.name}</h2>
        <Image
          src={user?.avatar_url || "https://github.com/account"}
          alt={user?.name || "Desconhecido"}
          width={400}
          height={400}
        />
        <p>Descrição: {user?.bio}</p>
        <p>Seguidores: {user?.followers}</p>
        <p>Seguindo: {user?.following}</p>
        <p>Seguindo: {user?.public_repos}</p>
      </div>
    </div>
  );
}
