//https://api.github.com/users/EdsonGaspar2
import Image from "next/image";
import { useEffect, useState } from "react";

type GitHubUserProps = {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
};
type GitHubUserProp = {
  userName: string;
};

export function GitHubUserApi({ userName }: GitHubUserProp) {
  const [users, setUsers] = useState<GitHubUserProps | null>(null);
  // const [erros, setErros] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);

    const fetchData = async () => {
      try {
        const userData = await fetch(
          `https://api.github.com/users/${userName}`,
        );
        const response: GitHubUserProps = await userData.json();
        setUsers(response);
        setLoading(false);

        console.log(response);
      } catch (error) {
        console.log(error);

        setLoading(false);
      }
    };

    fetchData();
  }, [userName]);

  return (
    <div>
      <div>{loading && <p>Carregando...</p>}</div>
      <div>
        <h2>{users?.name}</h2>
        <Image
          src={users?.avatar_url || "https://github.com/account"}
          alt={users?.name || "Desconhecido"}
          width={400}
          height={400}
        />
        <p>Descrição: {users?.bio}</p>
        <p>Seguidores: {users?.followers}</p>
        <p>Seguindo: {users?.following}</p>
        <p>Seguindo: {users?.public_repos}</p>
      </div>
    </div>
  );
}
