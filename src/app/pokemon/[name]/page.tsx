"use client";
import { useParams } from "next/navigation";
import PokemonResult from "../../components/PokemonResult";

export default function PokemonPage() {
  const params = useParams(); 
  const name = params.name as string; 

  return (
    <div>
      <PokemonResult name={name} />
    </div>
  );
}