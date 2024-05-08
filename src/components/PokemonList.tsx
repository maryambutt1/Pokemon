import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PokemonList.css";

const PokemonList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pokemon/fetch")
      .then((response) => response.json())
      .then((data) => {
        // Ensure data is an array of Pokemon objects
        if (Array.isArray(data)) {
          // Update the state with the fetched Pokémon data
          setPokemonList(data);
        } else {
          console.error("Data received is not an array:", data);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Pokémon List</h1>
      <div>
        <ul className="pokemon-list">
          {pokemonList.map((pokemon: Pokemon, index: number) => (
            <li key={index}>
              <Link
                className="pokemon-list-item"
                to={`/pokemon/${pokemon.name}`}
              >
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    index + 1
                  }.png`}
                  alt={pokemon.name}
                />
                <span>{pokemon.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonList;
