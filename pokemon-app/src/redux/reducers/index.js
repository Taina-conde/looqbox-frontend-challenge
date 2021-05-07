import {
    RECEIVE_POKEMON_LIST,
    ADD_POKEMON_STATS
} from '../actions/'

export default function reducer(state = {}, action) {
    switch(action.type) {
        case RECEIVE_POKEMON_LIST:
            return {
                ...state,
                ...action.pokemons
            }
        case ADD_POKEMON_STATS:
            return {
                ...state,
                [action.name]: {
                    ...state[action.name],
                    stats: {
                        ...action.stats
                    }
                }
            }
        default:
            return state
    }
} 