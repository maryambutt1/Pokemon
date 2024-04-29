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
  