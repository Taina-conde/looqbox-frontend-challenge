import Searchbar from "../Searchbar";
import PokemonList from "../PokemonList";

const HomeView = (props) => {
  return (
    <div>
      <Searchbar />
      <PokemonList pokemons = {props.pokemons}/>
    </div>
  );
};
export default HomeView;
