"use client";
import { useState } from "react";
export default function Home() {
  const [click, setClick] = useState<number>(199999999999999);
  return (
    <div>
      <p>{click}</p>
      <button onClick={() => setClick(click + 1)}>hochzählen</button>
    </div>
  );
}
