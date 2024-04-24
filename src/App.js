import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonList from "./components/PokemonList"; // Import your PokemonList component
import PokemonDetails from "./components/PokemonDetails"; // Import the PokemonDetails component
import store from "./store"; // Import your Redux store
import { Provider } from "react-redux";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} />
            <Route path="/" element={<PokemonList />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
