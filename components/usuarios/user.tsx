"use client";

import { useState } from "react";

export function UserComponents() {
  const [user, setUser] = useState("");

  return (
    <div>
      <main>
        <form className="flex gap-5 items-center flex-col px-6 max-w-2xl py-9">
          <label
            htmlFor="usuarioName"
            className="text-2xl font-semibold text-white/70"
          >
            Nome do usuario
          </label>
          <input
            type="text"
            placeholder="Inseri o nome do usuario"
            className="border border-t-0 outline-0 px-3 py-1 rounded-md w-full"
            onChange={(events) => setUser(events.target.value)}
          />
        </form>
        <div className="flex justify-center text-lg text-white/65">
          {user ? <p>{user}</p> : "Comece a pesquisar por um usuario"}
        </div>
      </main>
    </div>
  );
}
