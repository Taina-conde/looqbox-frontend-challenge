import Searchbar from "../Searchbar";
import PokemonList from "../PokemonList";

const HomeView = (props) => {
  return (
    <div>
      <Searchbar onSearchPokemon={props.onSearchPokemon} />
      <PokemonList
        pokemonSearched={props.pokemonSearched}
        pokemonStats={props.pokemonStats}
        onHandlePokemonStats={props.onHandlePokemonStats}
      />
    </div>
  );
};
export default HomeView;
