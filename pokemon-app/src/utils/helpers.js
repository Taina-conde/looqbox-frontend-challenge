export function formatPokemonList(arr) {
  let pokemonObj = {};
  arr.map(
    (item) =>
      (pokemonObj[item.name] = {
        ...item,
        stats: {},
      })
  );
  return pokemonObj;
}
