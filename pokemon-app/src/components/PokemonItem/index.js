import { useEffect, useState } from "react";
import { P } from "../../api";
import PokemonImage from "../PokemonImage";
import { useHistory, Link } from "react-router-dom";

const PokemonItem = (props) => {
  const [pokemonStats, setPokemonStats] = useState({});
  let history = useHistory();
  useEffect(() => {
    P.getPokemonByName(props.pokemonName)
      .then((result) => {
        setPokemonStats(result);
      })
      .catch((error) => {
        console.log(error);
        history.push(`/${props.pokemonName}`);
      });
  }, [props, history]);
  if (Object.keys(pokemonStats).length === 0) {
    return <span>Loading</span>;
  }
  return (
    <li>
      <Link to = {`/pokemon/${props.pokemonName}`}>
        <PokemonImage id={pokemonStats.id} name={props.pokemonName} />
        <span>{pokemonStats.name}</span>
        <div>
          {pokemonStats.types !== undefined &&
            pokemonStats.types.map((pokemon) => (
              <div key={pokemon.slot}>{pokemon.type.name}</div>
            ))}
        </div>
      </Link>
    </li>
  );
};
export default PokemonItem;
