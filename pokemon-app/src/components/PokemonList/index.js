const PokemonList = (props) => {
  return (
    <ul>
      {props.pokemons.map((pokemon) => {
        console.log(pokemon);
        return <li key={pokemon.name}>{pokemon.name}</li>;
      })}
    </ul>
  );
};
export default PokemonList;
