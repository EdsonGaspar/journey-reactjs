"use client";
import { SaudarPessoa } from "@/components/pessoa/saudar";
import { useState } from "react";

export default function PagePessoa() {
  const [nome, setNome] = useState("");
  const [saudacao, setSaudacao] = useState("");

  const handleClick = () => {
    setNome("Edson");
    setSaudacao(" tenha uma bela noite!");
  };

  return (
    <div>
      <h2>Alguem pode saudar apartir de aqui</h2>
      <SaudarPessoa nome={nome} saudacao={saudacao} />
      <button onClick={handleClick}> Clicar</button>
    </div>
  );
}
