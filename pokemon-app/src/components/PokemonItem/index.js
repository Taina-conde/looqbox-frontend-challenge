import {useEffect, useState} from 'react';
import { P } from '../../api'

const imagesBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world'
const PokemonItem = (props) => {
    const [pokemonStats, setPokemonStats] = useState({})
    useEffect(()=> {
        P.getPokemonByName(props.pokemon.name)
        .then((result)=> {
            
            setPokemonStats(result)
            
        })
    }, [props.pokemon.name])
    if (Object.keys(props.pokemon) === 0) {
        return <span>loading</span>
    } 
    return (
        <li>
            
            <span>{pokemonStats.name}</span>
            <div>{pokemonStats.types !== undefined && pokemonStats.types.map( pokemon => (<div key ={pokemon.slot}>
                {pokemon.type.name}
            </div>))}</div>
            
        </li>
    );
};
export default PokemonItem;