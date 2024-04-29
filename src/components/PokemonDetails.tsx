import React from "react";
import { useParams } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../api/pokemonApi";
import "./PokemonDetails.css"; 

const PokemonDetails: React.FC = () => {
  const { pokemonName } = useParams<{ pokemonName: string }>(); 
  const { data: pokemonData } = useGetPokemonByNameQuery(pokemonName ?? ""); 
  return (
    <div>
      <h1>Pokemon Details</h1>
      <div className="pokemon-image-container">
        <img
          className="pokemon-image"
          src={pokemonData?.sprites?.front_shiny}
          alt={pokemonData?.species?.name}
        />
      </div>
      <div className="pokemon-details">
        <div className="pokemon-details-attributes">
          <p>
            <b>Name:</b>
            <span className="detail-value">{pokemonData?.name}</span>
          </p>
          <p>
            <b>Height:</b>
            <span className="detail-value">{pokemonData?.height}</span>
          </p>
          <p>
            <b>Weight:</b>
            <span className="detail-value"> {pokemonData?.weight}</span>
          </p>
          <p>
            <b>Abilities:</b>
          </p>
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
