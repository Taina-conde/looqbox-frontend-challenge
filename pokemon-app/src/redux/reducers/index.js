import {
    RECEIVE_POKEMON_LIST,
    ADD_POKEMON_STATS,
    ADD_SEARCHED_POKEMON
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
        case ADD_SEARCHED_POKEMON:
            return {
                ...state,
                [action.name]: {
                    ...state[action.name],
                    name: action.name,
                    url: `https://pokeapi.co/api/v2/pokemon/${action.stats.id}/`,
                    stats: {
                        ...action.stats
                    }
                }
            }
        default:
            return state
    }
} 