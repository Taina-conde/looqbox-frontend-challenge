import PokemonItem from '../PokemonItem';
const PokemonList = (props) => {
  return (
    <ul>
      {props.pokemons.map((pokemon) => {
        console.log(pokemon);
        return <PokemonItem key={pokemon.name} pokemon = {pokemon}/>;
      })}
    </ul>
  );
};
export default PokemonList;
