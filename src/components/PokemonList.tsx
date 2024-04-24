import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPokemonList } from "../features/pokemon/pokemonSlice";
import {
  useGetPokemonListQuery,
  useGetPokemonByNameQuery,
} from "../api/pokemonApi";
import PokemonDetails from "./PokemonDetails";
import "./PokemonList.css";
import { Link, useParams } from "react-router-dom";

interface Pokemon {
  name: string;
  url: string;
}

const PokemonList: React.FC = () => {
  const dispatch = useDispatch();
  const { data: pokemonList, error, isLoading } = useGetPokemonListQuery();
  // const [clickedPokemon, setClickedPokemon] = useState<string[]>([]);
  const status = isLoading ? "loading" : error ? "failed" : "succeeded";

  useEffect(() => {
    dispatch(fetchPokemonList() as any);
  }, [dispatch]);

  // const handlePokemonClick = (name: string) => {
  //   setClickedPokemon(prevState => {
  //     if (prevState.includes(name)) {
  //       // If the clicked Pokemon is already in the array, remove it
  //       return prevState.filter(item => item !== name);
  //     } else {
  //       // If the clicked Pokemon is not in the array, add it
  //       return [...prevState, name];
  //     }
  //   });
  // };

  if (!pokemonList || !pokemonList.results) {
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
              <li key={index} className="pokemon-list-item">
                <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PokemonList;
