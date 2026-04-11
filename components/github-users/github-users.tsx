"use client";

import { useState } from "react";
import { GetGitHubUsers } from "./getGitHub-users";
import Image from "next/image";

export function GitHubUsers() {
  const [usuario, setUsuario] = useState("");
  const { user, loading } = GetGitHubUsers(usuario);

  return (
    <form className="flex flex-col gap-6">
      <div className="space-x-2 flex items-center">
        <label className="font-semibold text-white/75">Nome do Usuario</label>
        <input
          type="text"
          value={usuario}
          placeholder="Encontre o teu usuario"
          className="px-2.5 py-1 border border-t-0 flex-1 rounded-lg md:w-4xl outline-0"
          onChange={(events) => setUsuario(events.target.value)}
        />
      </div>
      <button
        onClick={(event) => {
          event.preventDefault();
          setUsuario("");
        }}
        className="px-3.5 py-1.5 border rounded-2xl bg-blue-400 text-blue-950 text-lg border-blue-300 w-44 self-end hover:cursor-pointer font-bold"
      >
        Limpar
      </button>
      {user ? (
        <div className="border">
          <h3>{loading}</h3>
          <h2>{user?.name}</h2>
          <p>{user?.bio}</p>
          <Image
            src={user?.avatar_url || ""}
            alt={user?.name || ""}
            width={350}
            height={350}
          />
          <p>Seguindo: {user?.following}</p>
          <p>Seguidores: {user?.followers}</p>
        </div>
      ) : (
        <p>Pesquise aqui o teu usuario</p>
      )}
    </form>
  );
}
