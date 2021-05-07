import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { P } from "../../api";
import HomeView from "../HomeView";
import NoMatch from "../NoMatch";
import PokemonView from "../PokemonView";
import { receiveList } from "../../redux/actions";
import { formatPokemonList } from "../../utils/helpers";
import { connect } from "react-redux";

function App(props) {
  const [pokemonSearched, setPokemonSearched] = useState("");
  const { dispatch } = props;

  useEffect(() => {
    const interval = {
      offset: 0,
      limit: 20,
    };
    P.getPokemonsList(interval).then(function (response) {
      const pokemonListArr = response.results;
      const pokemonListObj = formatPokemonList(pokemonListArr);
      dispatch(receiveList(pokemonListObj));
    });
  }, [dispatch]);

  const searchPokemon = (pokemon) => {
    setPokemonSearched(pokemon);
  };
  const resetSearch = () => {
    setPokemonSearched("");
  };

  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <HomeView
            onSearchPokemon={searchPokemon}
            pokemonSearched={pokemonSearched}
          />
        </Route>
        <Route
          exact
          path="/pokemon/:pokemonName"
          component={PokemonView}
        />
        <Route path="*">
          <NoMatch onResetSearch={resetSearch} />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default connect()(App);
