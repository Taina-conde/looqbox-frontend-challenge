export const RECEIVE_POKEMON_LIST = 'RECEIVE_POKEMON_LIST';


export function receiveList(pokemons) {
    return {
        type: RECEIVE_POKEMON_LIST,
        pokemons
    }
}