import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";

const PokemonDetails: React.FC = () => {
  const { pokemonName } = useParams<{ pokemonName: string }>();
  const [pokemonDetails, setPokemonDetails] = useState<any>(null);

  useEffect(() => {
      fetch(`http://localhost:5000/api/pokemon/${pokemonName}`)
          .then(response => response.json())
          .then(data => {
              setPokemonDetails(data);
          })
          .catch(error => console.error(error));
  }, [pokemonName]);
console.log("pokemon details",pokemonDetails)
  if (!pokemonDetails) {
      return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Pokemon Details</h1>
      <div className="pokemon-image-container">
        <img
          className="pokemon-image"
          src={pokemonDetails?.sprites?.front_shiny}
          alt={pokemonDetails?.species?.name}
        />
      </div>
      <div className="pokemon-details">
        <div className="pokemon-details-attributes">
          <p>
            <b>Name:</b>
            <span className="detail-value">{pokemonDetails?.name}</span>
          </p>
          <p>
            <b>Base Experience:</b>
            <span className="detail-value">{pokemonDetails?.base_experience}</span>
          </p>
          <p>
            <b>Height:</b>
            <span className="detail-value">{pokemonDetails?.height}</span>
          </p>
          <p>
            <b>Weight:</b>
            <span className="detail-value"> {pokemonDetails?.weight}</span>
          </p>
          <p>
            <b>Abilities:</b>
          </p>
          <ul>
            {pokemonDetails?.abilities?.map((ability: PokemonAbility, index: number) => (
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
