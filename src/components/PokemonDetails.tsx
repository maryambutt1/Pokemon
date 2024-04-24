import React from "react";
import { useParams } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../api/pokemonApi";

const PokemonDetails: React.FC = () => {
  const { pokemonName } = useParams<{ pokemonName: string }>(); // Get the pokemonName parameter from the URL
  const { data: pokemonData } = useGetPokemonByNameQuery(pokemonName ?? ""); // Fetch details of the clicked Pokemon, handling potential undefined

  return (
    <div className="pokemon-details">
       <h2>Pokemon Details</h2>
         <div className="pokemon-details"></div>
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
  );
};

export default PokemonDetails;
