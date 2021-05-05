import { useEffect } from "react";
import "./App.css";
import { P } from './api/api'

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
    </div>
  );
}

export default App;
