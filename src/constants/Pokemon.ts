interface PokemonAbility {
  ability: {
    name: string;
  };
  is_hidden: boolean;
}

interface PokemonSprites {
  front_shiny: string;
}

interface PokemonSpecies {
  name: string;
}

interface Pokemon {
  name: string;
  height: number;
  weight: number;
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  species: PokemonSpecies;
}
interface PokemonDetailsData {
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  sprites: {
    front_shiny: string;
  };
  abilities: PokemonAbility[];
}
