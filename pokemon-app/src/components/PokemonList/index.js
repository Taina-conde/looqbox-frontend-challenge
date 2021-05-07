import PokemonItem from "../PokemonItem";
import { connect } from "react-redux";
const PokemonList = (props) => {
  const { pokemons } = props;
  const pokemonNamesArr = Object.keys(pokemons);
  return (
    <ul>
      {props.pokemonSearched ? (
        <PokemonItem pokemonName={props.pokemonSearched} />
      ) : (
        pokemonNamesArr.map((pokemon) => {
          console.log('aqui', pokemon);
          return (
            <PokemonItem
              key={pokemon}
              pokemonName={pokemon}
              pokemonStats={props.pokemonStats}
              onHandlePokemonStats={props.onHandlePokemonStats}
            />
          );
        })
      )}
    </ul>
  );
};
function mapStateToProps(pokemons) {
  return {
    pokemons,
  };
}
export default connect(mapStateToProps)(PokemonList);
