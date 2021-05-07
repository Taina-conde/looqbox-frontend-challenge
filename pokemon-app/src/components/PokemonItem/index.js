import { useEffect } from "react";
import { P } from "../../api";
import PokemonImage from "../PokemonImage";
import { useHistory, Link } from "react-router-dom";
import { addPokemonStats } from '../../redux/actions';
import { connect } from 'react-redux';

const PokemonItem = (props) => {
  let history = useHistory();
  const {pokemonName, dispatch, pokemon} = props; 
  useEffect(() => {
    P.getPokemonByName(pokemonName)
      .then((stats) => {
        dispatch(addPokemonStats(pokemonName, stats))
      })
      .catch((error) => {
        console.log(error);
        history.push(`/${pokemonName}`);
      });
  }, [history, pokemonName, dispatch]);

  return (
    <li>
      <Link to = {`/pokemon/${pokemonName}`}>
        <PokemonImage id={pokemon.stats.id} name={pokemonName} />
        <span>{pokemonName}</span>
        <div>
          {pokemon.stats.types !== undefined &&
            pokemon.stats.types.map((pokemon) => (
              <div key={pokemon.slot}>{pokemon.type.name}</div>
            ))}
        </div>
      </Link>
    </li>
  );
};
function mapStateToProps(pokemons, { pokemonName }) {
  return {
    pokemon: pokemons[pokemonName]
  }
}
export default connect(mapStateToProps)(PokemonItem);
