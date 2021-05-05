import PokemonItem from '../PokemonItem';
const PokemonList = (props) => {
  return (
    <ul>
      {props.pokemonSearched 
      ? <PokemonItem pokemonName = {props.pokemonSearched}/>
      : props.pokemons.map((pokemon) => {
        console.log(pokemon);
        return <PokemonItem key={pokemon.name} pokemonName = {pokemon.name}/>;
      })}
    </ul>
  );
};
export default PokemonList;
