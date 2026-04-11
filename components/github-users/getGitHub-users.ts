import { useEffect, useState } from "react";

type GtHubUsersProps = {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
};

export function GetGitHubUsers(nameUser: string) {
  const [user, setUser] = useState<GtHubUsersProps | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    const GetUser = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${nameUser}`,
        );
        const userData: GtHubUsersProps = await response.json();
        setUser(userData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(true);
      }
    };

    GetUser();
  }, [nameUser]);

  return { user, loading };
}
