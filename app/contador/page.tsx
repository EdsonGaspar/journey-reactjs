"use client";
import { useEffect, useRef, useState } from "react";

export default function ContadorPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = countRef.current + 1;
  });

  const handleCounter = () => {};
  return (
    <div className="flex items-center justify-center h-screen">
      <main className="flex flex-col justify-center items-center gap-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border"
        />
        <h2 className="font-bold">{countRef.current}</h2>
        <button
          onClick={handleCounter}
          className="px-4 py-1.5 border bg-blue-400 border-blue-300 rounded-md font-semibold text-xl"
        >
          +1
        </button>
      </main>
    </div>
  );
}
