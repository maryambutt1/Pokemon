import React from "react";
import { useParams } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../api/pokemonApi";
import "./PokemonList.css"; // Import the CSS file

const PokemonDetails: React.FC = () => {
  const { pokemonName } = useParams<{ pokemonName: string }>(); // Get the pokemonName parameter from the URL
  const { data: pokemonData } = useGetPokemonByNameQuery(pokemonName ?? ""); // Fetch details of the clicked Pokemon, handling potential undefined

  return (
    <div>
      <h1>Pokemon Details</h1>
      <div className="pokemon-image-container"> {/* Apply container */}
        <img
          className="pokemon-image" 
          src={pokemonData?.sprites?.front_shiny}
          alt={pokemonData?.species?.name}
        />
      </div>
      <div className="pokemon-details">
        <div className="pokemon-details-attributes">
          <p>Height: {pokemonData?.height}</p>
          <p>Weight: {pokemonData?.weight}</p>
          <p>Abilities:</p>
          <ul>
            {pokemonData?.abilities?.map((ability: any, index: number) => (
              <li key={index}>
                {ability.ability.name} {ability.is_hidden ? "(Hidden)" : ""}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
