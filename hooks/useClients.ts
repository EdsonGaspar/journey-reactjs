"use client";

import { useEffect, useState } from "react";

type ClientsProps = {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
};

function useClients(clientUser: string) {
  const [client, setClient] = useState<ClientsProps | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!clientUser) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    const getData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.github.com/users/${clientUser}`,
        );
        const data = await response.json();
        setClient(data);
      } catch {
        setError("Usuario nao encontrado");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [clientUser]);
  return { client, loading, error, setClient };
}

export default useClients;
