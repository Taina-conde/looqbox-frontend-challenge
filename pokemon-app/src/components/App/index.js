import { useEffect } from "react";
import "./App.css";
import { P } from '../../api'
import HomeView from '../HomeView';

function App() {
  useEffect(() => {
    P.getPokemonByName("eevee")
  .then(function(response) {
    console.log(response)
  })
  }, [])
  return (
    <div>
      <header></header>
      <HomeView/>
    </div>
  );
}

export default App;
