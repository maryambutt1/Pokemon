// import React from "react";
// import { render, screen } from "@testing-library/react";
// import { MemoryRouter, Route } from "react-router-dom";
// import { useGetPokemonByNameQuery } from "../api/pokemonApi";
// import PokemonDetails from "../components/PokemonDetails";

// jest.mock("../api/pokemonApi");

// describe("PokemonDetails Component", () => {
//   test("renders Pokémon details correctly when data is available", () => {
//     const mockPokemonData = {
//       name: "bulbasaur",
//       height: 7,
//       weight: 69,
//       sprites: { front_shiny: "bulbasaur.png" },
//       abilities: [
//         { ability: { name: "chlorophyll" }, is_hidden: false },
//         { ability: { name: "overgrow" }, is_hidden: true },
//       ],
//     };

//     useGetPokemonByNameQuery.mockReturnValueOnce({ data: mockPokemonData });

//     render(
//       <MemoryRouter initialEntries={["/pokemon/bulbasaur"]}>
//         <Route path="/pokemon/:pokemonName">
//           <PokemonDetails />
//         </Route>
//       </MemoryRouter>
//     );

//     expect(screen.getByText("Name: bulbasaur")).toBeInTheDocument();
//     expect(screen.getByText("Height: 7")).toBeInTheDocument();
//     expect(screen.getByText("Weight: 69")).toBeInTheDocument();
//     expect(screen.getByText("Abilities:")).toBeInTheDocument();
//     expect(screen.getByText("chlorophyll (Hidden)")).toBeInTheDocument();
//     expect(screen.getByText("overgrow")).toBeInTheDocument();
//   });
// });
