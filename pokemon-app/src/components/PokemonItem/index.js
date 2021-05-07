import { useEffect, useState } from "react";
import { P } from "../../api";
import PokemonImage from "../PokemonImage";
import { useHistory, Link } from "react-router-dom";

const PokemonItem = (props) => {
  let history = useHistory();
  const {pokemonName, onHandlePokemonStats} = props; 
  useEffect(() => {
    P.getPokemonByName(pokemonName)
      .then((result) => {
        console.log(result)
        onHandlePokemonStats(result);
      })
      .catch((error) => {
        console.log(error);
        history.push(`/${pokemonName}`);
      });
  }, [history, pokemonName]);
  if (Object.keys(props.pokemonStats).length === 0) {
    return <span>Loading</span>;
  }
  return (
    <li>
      <Link to = {`/pokemon/${props.pokemonName}`}>
        <PokemonImage id={props.pokemonStats.id} name={props.pokemonName} />
        <span>{props.pokemonStats.name}</span>
        <div>
          {props.pokemonStats.types !== undefined &&
            props.pokemonStats.types.map((pokemon) => (
              <div key={pokemon.slot}>{pokemon.type.name}</div>
            ))}
        </div>
      </Link>
    </li>
  );
};
export default PokemonItem;
