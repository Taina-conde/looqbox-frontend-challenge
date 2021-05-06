import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { P } from "../../api";
import HomeView from "../HomeView";
import NoMatch from "../NoMatch";

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
  const resetSearch = () => {
    setPokemonSearched("");
  }
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" >
          <HomeView
            pokemons={pokemons}
            onSearchPokemon={searchPokemon}
            pokemonSearched={pokemonSearched}
          />
        </Route>
        <Route path = "*">
           <NoMatch onResetSearch = {resetSearch}/>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
