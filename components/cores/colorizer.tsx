"use client";
import { useState } from "react";

export function Colorizer() {
  const [color, setColor] = useState("#6d0e0e");

  const getRandomColor = () => {
    const random = `#${Math.floor(Math.random() * 16777215).toString(16)}
    `;
    return random;
  };

  const handleColor = () => {
    const randomColor = getRandomColor();
    setColor(randomColor);
  };
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div
        className={`w-52 h-52 border border-pink-300 rounded-md`}
        style={{ backgroundColor: color }}
      >
        <span className="p-2">{color}</span>
      </div>
      <button className="border rounded-xl" onClick={handleColor}>
        Mudar
      </button>
    </div>
  );
}
