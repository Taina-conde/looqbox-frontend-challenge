import { useEffect, useState } from "react";
import "./App.css";
import { P } from "../../api";
import HomeView from "../HomeView";

function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const interval = {
      offset: 0,
      limit: 20,
    };
    P.getPokemonsList(interval).then(function (response) {
      setPokemons(response.results);
    });
  }, []);
  return (
    <div>
      <header></header>
      <HomeView pokemons = {pokemons}/>
    </div>
  );
}

export default App;
