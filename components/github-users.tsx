"use client";

import { useState } from "react";

export function GitHubUsers() {
  const [user, setUser] = useState("");
  return (
    <form className="flex flex-col gap-6">
      <div className="space-x-2 flex items-center">
        <label className="font-semibold text-white/75">Nome do Usuario</label>
        <input
          type="text"
          value={user}
          placeholder="Encontre o teu usuario"
          className="px-2.5 py-1 border border-t-0 flex-1 rounded-lg md:w-4xl outline-0"
          onChange={(events) => setUser(events.target.value)}
        />
      </div>
      <button
        onClick={(event) => {
          event.preventDefault();
          setUser("");
        }}
        className="px-3.5 py-1.5 border rounded-2xl bg-blue-400 text-blue-950 text-lg border-blue-300 w-44 self-end hover:cursor-pointer font-bold"
      >
        Limpar
      </button>
      <div className="border">{user}</div>
    </form>
  );
}
