/**
 * Criar uma aplicacao que permita o contador comecar com um numero aleatorio e estar a acrescentar +3
 */
"use client";
import { useState } from "react";

export function CounterComponent() {
  const [counter, setCounter] = useState(() => Math.floor(Math.random() * 16));

  const increment = () => {
    setCounter(counter + 3);
  };
  return (
    <div className="flex items-center justify-center flex-col my-6 gap-2.5">
      <h2 className="text-center font-bold text-xl ">{counter}</h2>
      <button
        onClick={increment}
        className="text-center border rounded-md px-6 py-1"
      >
        +3
      </button>
    </div>
  );
}
