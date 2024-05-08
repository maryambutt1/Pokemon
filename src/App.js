import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import ComparePokemon from "./components/ComparePokemon";
import store from "./store";
import { Provider } from "react-redux";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} />
            <Route path="/compare" element={<ComparePokemon />} />
            <Route path="/" element={<PokemonList />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
