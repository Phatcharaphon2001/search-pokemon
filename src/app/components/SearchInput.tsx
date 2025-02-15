"use client"; // ✅ ต้องใส่เพราะใช้ Hooks ของ Next.js

import { useState } from "react";
import { useRouter } from "next/navigation"; 

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const router = useRouter(); 

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/pokemon/${search.toLowerCase()}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Pokémon..."
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
}
