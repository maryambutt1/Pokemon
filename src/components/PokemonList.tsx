import React from "react";
import {
  useGetPokemonListQuery,
} from "../api/pokemonApi";
import "./PokemonList.css";
import { Link } from "react-router-dom";

interface Pokemon {
  name: string;
  url: string;
}

const PokemonList: React.FC = () => {
  const { data: pokemonList, error, isLoading } = useGetPokemonListQuery();
  const status = isLoading ? "loading" : error ? "failed" : "succeeded";

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !pokemonList || !pokemonList.results) {
    return <div>Error: Invalid data received</div>;
  }

  const pokemonListData = pokemonList.results;

  return (
    <div>
      <h1>Pokémon List</h1>
      {status === "loading" && <div>Loading...</div>}
      {status === "succeeded" && (
        <div>
          <ul className="pokemon-list">
            {pokemonListData?.map((pokemon: Pokemon, index: number) => (
              <li key={index} >
                <Link className="pokemon-list-item" to={`/pokemon/${pokemon.name}`}>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                    alt={pokemon.name}
                  />
                  <span>{pokemon.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PokemonList;
