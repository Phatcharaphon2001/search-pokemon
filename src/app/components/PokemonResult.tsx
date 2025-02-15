"use client";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../../utils/queries";
import { useRouter } from "next/navigation";
import { Attack, Evolution} from "@/types/pokemon";

export default function PokemonResult({ name }: { name: string }) {
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name },
  });
  const router = useRouter();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data.pokemon) return <p>No Pokémon found!</p>;

  const { pokemon } = data;

  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-xl font-bold">{pokemon.name} (#{pokemon.number})</h2>
      <img src={pokemon.image} alt={pokemon.name} width="150" />
      <p><strong>Classification:</strong> {pokemon.classification}</p>
      <p><strong>Types:</strong> {pokemon.types.join(", ")}</p>
      <p><strong>Max HP:</strong> {pokemon.maxHP}</p>

      <h3 className="text-lg font-bold mt-4">Attacks</h3>
      <section className="text-md font-bold">Fast Attacks</section>
      <ul>
        {pokemon.attacks.fast.map((fast: Attack) => (
          <li key={fast.name}>
            {fast.name} ({fast.type}) - {fast.damage} dmg
          </li>
        ))}
        <section className="text-md font-bold">Special Attacks</section>
          {pokemon.attacks.special.map((special: Attack) => (
          <li key={special.name}>
            {special.name} ({special.type}) - {special.damage} dmg
          </li>
        ))}

      </ul>

      <h3 className="text-lg font-bold mt-4">Evolutions</h3>
      <div className="flex gap-4">
        {pokemon.evolutions ? (
          pokemon.evolutions.map((evo: Evolution) => (
            <div
            key={evo.id}
            onClick={() => router.push(`/pokemon/${evo.name.toLowerCase()}`)}
            onKeyPress={(e) => {
              if (e.key === "Enter") router.push(`/pokemon/${evo.name.toLowerCase()}`);
            }}
            role="button"
            tabIndex={0}
            className="cursor-pointer shadow-md rounded-lg p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl "
          >
            <img src={evo.image} alt={evo.name} width="100" className="mx-auto" />
            <p className="text-center font-semibold mt-2">{evo.name} (#{evo.number})</p>
          </div>
          
          ))
        ) : (
          <p>No evolutions available.</p>
        )}
      </div>
    </div>
  );
}
