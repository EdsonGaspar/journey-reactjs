import { useEffect, useState } from "react";

type gitUserProps = {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
};

function useGitHubUser(userName: string) {
  const [user, setUser] = useState<gitUserProps | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const gitHubUser = async () => {
      setLoading(true);
      try {
        const userData = await fetch(
          `https://api.github.com/users/${userName}`,
        );
        const response: gitUserProps = await userData.json();
        setUser(response);
      } catch (erro) {
        console.log(erro);
      } finally {
        setLoading(false);
      }
    };

    gitHubUser();
  }, [userName]);

  return { user, loading };
}

export default useGitHubUser;
