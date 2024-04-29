// import React from "react";
// import { render, screen } from "@testing-library/react";
// import PokemonList from "../components/PokemonList";
// import { Provider } from "react-redux";
// import store from "../../store";

// describe("PokemonList Component", () => {
//   it("renders loading state", () => {
//     render(
//       <Provider store={store}>
//         <PokemonList />
//       </Provider>
//     );
//     const loadingElement = screen.getByText(/Loading.../i);
//     expect(loadingElement).toBeTruthy();
//   });

//   it("renders error state", () => {
//     render(
//       <Provider store={store}>
//         <PokemonList />
//       </Provider>
//     );
//     const errorElement = screen.getByText(/Error: Invalid data received/i);
//     expect(errorElement).toBeTruthy();
//   });

//   it("renders Pokémon list items", () => {
//     const mockPokemonList = {
//       results: [
//         { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
//         { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
//         { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
//       ],
//     };

//     render(
//       <Provider store={store}>
//         <PokemonList />
//       </Provider>
//     );
//     mockPokemonList.results.forEach((pokemon) => {
//       const pokemonElement = screen.getByText(pokemon.name, { exact: false });
//       expect(pokemonElement).toBeInTheDocument();
//     });
//   });
// });
