"use client";
import useClients from "@/hooks/useClients";
import Image from "next/image";
import { useState } from "react";

export function ClientCard() {
  const [userName, setUserName] = useState("");
  const { client, error, loading } = useClients(userName);
  return (
    <div>
      <form className="flex gap-2.5 justify-center items-center my-8">
        <label className="text-lg font-light text-white/80">
          Nome do cliente
        </label>
        <input
          type="text"
          onChange={(evt) => setUserName(evt.target.value)}
          className="flex-1 border border-t-0 rounded-lg px-3 py-1 outline-0"
        />
      </form>
      <main>
        <div>{loading && <p>Carregando...</p>}</div>
        <div>{error && <p>{error}</p>}</div>
        {client ? (
          <div>
            <h3>{client.name}</h3>
            <p>{client.bio}</p>
            <Image
              src={client.avatar_url}
              alt={client.name}
              width={200}
              height={200}
            />
            <div>
              <p>
                Seguindo <span>{client.following}</span>
              </p>
              <p>
                Seguidores <span>{client.followers}</span>
              </p>
            </div>
            <p>
              Repositorios publicos <span>{client.public_repos}</span>
            </p>
          </div>
        ) : (
          <p>Pesquise aqui o teu Cliente</p>
        )}
      </main>
    </div>
  );
}
