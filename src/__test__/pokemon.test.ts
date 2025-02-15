import { mockPokemons } from "../__mocks__/pokemonMock";

describe("Pokemon Type Validation", () => {
  it("should verify that Bulbasaur is a Grass type Pokémon", () => {
    const bulbasaur = mockPokemons.find((p) => p.name === "Bulbasaur");
    expect(bulbasaur).toBeDefined();
    expect(bulbasaur?.types).toContain("Grass");
  });

  it("should verify that Charmander is a Fire type Pokémon", () => {
    const charmander = mockPokemons.find((p) => p.name === "Charmander");
    expect(charmander).toBeDefined();
    expect(charmander?.types).toContain("Fire");
  });

  it("should verify that Squirtle is a Water type Pokémon", () => {
    const squirtle = mockPokemons.find((p) => p.name === "Squirtle");
    expect(squirtle).toBeDefined();
    expect(squirtle?.types).toContain("Water");
  });
});
