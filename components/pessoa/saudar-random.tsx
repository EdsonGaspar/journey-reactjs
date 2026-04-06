"use client";
import { useEffect, useState } from "react";

export function RandomGreeting() {
  const [random] = useState(() => Math.floor(Math.random() * 5) + 1);
  const [greeting, setGreeting] = useState("");

  const randomMax = 5;

  useEffect(() => {
    window.localStorage.setItem("Random", random.toString());

    if (randomMax === random) {
      window.localStorage.setItem("jackpot", String(true));
    } else {
      window.localStorage.setItem("jackpot", String(false));
    }

    switch (random) {
      case 1:
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setGreeting("Ola");
        break;
      case 2:
        setGreeting("Tudo bem?");
        break;

      case 3:
        setGreeting("Como estão as coisas?");
        break;
      case 4:
        setGreeting("É como?");
        break;
      case 5:
        setGreeting("Tá numa?");
        break;
      default:
        setGreeting("Saudações");
        break;
    }

    return () => {
      window.localStorage.removeItem("jackpot");
    };
  }, [random]);
  return (
    <div className="flex justify-center items-center">
      <h2 className="bg-yellow-400 text-2xl font-semibold py-4 px-6 text-black rounded-md">
        {greeting}
      </h2>
    </div>
  );
}
