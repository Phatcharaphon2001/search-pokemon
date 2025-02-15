"use client"; 

import SearchInput from "../app/components/SearchInput";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Search Pokémon</h1>
      <SearchInput />
    </div>
  );
}
