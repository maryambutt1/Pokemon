import React, { useState, useEffect } from "react";
import "../styles/ComparePokemon.css";

const usePokemonDetails = (selectedPokemon: string | null) => {
  const [pokemonDetails, setPokemonDetails] = useState<any>(null);

  useEffect(() => {
    if (selectedPokemon) {
      fetch(`http://localhost:5000/api/pokemon/${selectedPokemon}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch Pokemon details");
          }
          return response.json(); // Parse JSON response
        })
        .then((data) => {
          setPokemonDetails(data); // Use parsed JSON data
        })
        .catch((error) => {
          console.error("Error fetching Pokemon details:", error);
        });
    }
  }, [selectedPokemon]);

  return pokemonDetails;
};

const ComparePokemon: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<string[]>([]);
  const [selectedPokemon1, setSelectedPokemon1] = useState<string>("");
  const [selectedPokemon2, setSelectedPokemon2] = useState<string>("");

  useEffect(() => {
    fetchPokemonNames();
  }, []);

  const fetchPokemonNames = () => {
    fetch("http://localhost:5000/api/pokemon/names")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Pokemon names");
        }
        return response.json();
      })
      .then((data) => {
        setPokemonList(data);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon names:", error);
      });
  };

  const pokemonDetails1 = usePokemonDetails(selectedPokemon1);
  const pokemonDetails2 = usePokemonDetails(selectedPokemon2);

  const handlePokemon1Change = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedPokemon1(event.target.value);
  };

  const handlePokemon2Change = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedPokemon2(event.target.value);
  };

  return (
    <div className="compare-pokemon-container">
      <h1>Compare Pokemon</h1>
      <div className="dropdowns-container">
        <select
          className="pokemon-dropdown"
          value={selectedPokemon1}
          onChange={handlePokemon1Change}
        >
          <option value="">Select Pokemon 1</option>
          {pokemonList.map((pokemon: string) => (
            <option key={pokemon} value={pokemon}>
              {pokemon}
            </option>
          ))}
        </select>
        <select
          className="pokemon-dropdown"
          value={selectedPokemon2}
          onChange={handlePokemon2Change}
        >
          <option value="">Select Pokemon 2</option>
          {pokemonList.map((pokemon: string) => (
            <option key={pokemon} value={pokemon}>
              {pokemon}
            </option>
          ))}
        </select>
      </div>
      <div className="pokemon-comparison">
        <div className="pokemon-comparison-item">
          {pokemonDetails1 && (
            <div>
              <h2>{pokemonDetails1.name}</h2>
              <img
                className="pokemon-image"
                src={pokemonDetails1.sprites.front_default}
                alt={pokemonDetails1.name}
              />
              <p className="pokemon-details">
                Height: {pokemonDetails1.height}
              </p>
              <p className="pokemon-details">
                Weight: {pokemonDetails1.weight}
              </p>
            </div>
          )}
        </div>
        <div className="pokemon-comparison-item">
          {pokemonDetails2 && (
            <div>
              <h2>{pokemonDetails2.name}</h2>
              <img
                className="pokemon-image"
                src={pokemonDetails2.sprites.front_default}
                alt={pokemonDetails2.name}
              />
              <p className="pokemon-details">
                Height: {pokemonDetails2.height}
              </p>
              <p className="pokemon-details">
                Weight: {pokemonDetails2.weight}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComparePokemon;
