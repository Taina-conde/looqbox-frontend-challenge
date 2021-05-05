import { useEffect, useState } from "react";
import "./App.css";
import { P } from "../../api";
import HomeView from "../HomeView";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonSearched, setPokemonSearched] = useState("");

  useEffect(() => {
    const interval = {
      offset: 0,
      limit: 20,
    };
    P.getPokemonsList(interval).then(function (response) {
      setPokemons(response.results);
    });
  }, []);

  const searchPokemon = (pokemon) => {
    setPokemonSearched(pokemon);
  };
  return (
    <div>
      <header></header>
      <HomeView pokemons={pokemons} onSearchPokemon={searchPokemon} pokemonSearched = {pokemonSearched} />
    </div>
  );
}

export default App;
