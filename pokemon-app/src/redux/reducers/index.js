import {
    RECEIVE_POKEMON_LIST
} from '../actions/'

export default function reducer(state = {}, action) {
    switch(action.type) {
        case RECEIVE_POKEMON_LIST:
            return {
                ...state,
                ...action.pokemons
            }
        default:
            return state
    }
} 