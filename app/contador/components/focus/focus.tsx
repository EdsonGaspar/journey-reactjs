import { useEffect, useRef } from "react";

export function Focus() {
  const inputElementRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputElementRef.current?.focus();
  }, []);
  return (
    <div>
      <input
        type="text"
        ref={inputElementRef}
        className="border px-2 focus:outline-amber-400 focus:border-0"
      />
    </div>
  );
}
