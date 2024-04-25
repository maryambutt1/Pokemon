import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPokemonList, pokemonListFailed, pokemonListLoading, pokemonListReceived } from "../features/pokemon/pokemonSlice";
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
  const status = isLoading ? "loading" : error ? "failed" : "succeeded";

  useEffect(() => {
    dispatch(pokemonListLoading());
    dispatch<any>(fetchPokemonList())
      .then((response: any) => {
        dispatch(pokemonListReceived(response));
      })
      .catch((err: any) => {
        dispatch(pokemonListFailed(err.message));
      });
  }, [dispatch]);

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
