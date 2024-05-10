import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/PokemonList.css";

const PokemonList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPokemonData = async () => {
      setLoading(true); // Set loading to true when fetching data
      try {
        const response = await fetch(
          `http://localhost:5000/api/pokemon/fetch?page=${currentPage}`
        );
        const data = await response.json();
        setPokemonList(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error(error);
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchPokemonData();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div>
      <h1>Pokémon List</h1>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
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

            <div className="pagination">
              <button onClick={handlePrevPage}>Previous</button>
              <span>{currentPage}</span>
              <button className="next-btn" onClick={handleNextPage}>Next</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default PokemonList;
