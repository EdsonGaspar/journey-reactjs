"use client";
import { createContext, useContext } from "react";

const NomeContexto = createContext("");

function UserCard() {
  const nome = useContext(NomeContexto);
  return <h2>Ola, {nome}!</h2>;
}

function Meio() {
  return <UserCard />;
}

export default function FuncionarioPage() {
  return (
    <NomeContexto.Provider value="Edson">
      <Meio />
    </NomeContexto.Provider>
  );
}
