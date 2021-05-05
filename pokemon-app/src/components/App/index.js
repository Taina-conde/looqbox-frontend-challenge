import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
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
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <HomeView
            pokemons={pokemons}
            onSearchPokemon={searchPokemon}
            pokemonSearched={pokemonSearched}
          />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
