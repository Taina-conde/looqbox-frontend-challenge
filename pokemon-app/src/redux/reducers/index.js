import {
    RECEIVE_POKEMON_LIST,
    ADD_POKEMON_STATS,
    SEARCH_POKEMON
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
        case SEARCH_POKEMON:
            return {
                ...state,
                [action.name]: {
                    ...state[action.name],
                    searched: true,
                }
            }
        default:
            return state
    }
} 