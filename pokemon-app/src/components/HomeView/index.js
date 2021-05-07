import Searchbar from "../Searchbar";
import PokemonList from "../PokemonList";

const HomeView = (props) => {
  return (
    <div>
      <Searchbar onSearchPokemon={props.onSearchPokemon} />
      <PokemonList
        pokemons={props.pokemons}
        pokemonSearched={props.pokemonSearched}
        pokemonStats={props.pokemonStats}
        onHandlePokemonStats={props.onHandlePokemonStats}
      />
    </div>
  );
};
export default HomeView;
