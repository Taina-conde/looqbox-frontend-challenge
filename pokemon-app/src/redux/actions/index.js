export const RECEIVE_POKEMON_LIST = 'RECEIVE_POKEMON_LIST';
export const ADD_POKEMON_STATS = 'ADD_POKEMON_STATS';
export const ADD_SEARCHED_POKEMON = 'ADD_SEARCHED_POKEMON'


export function receiveList(pokemons) {
    return {
        type: RECEIVE_POKEMON_LIST,
        pokemons
    }
}
export function addPokemonStats(name, stats) {
    return {
        type: ADD_POKEMON_STATS,
        name,
        stats
    }
}
export function addSearchedPokemon(name, stats) {
    return {
        type: ADD_SEARCHED_POKEMON,
        name,
        stats
    }
}