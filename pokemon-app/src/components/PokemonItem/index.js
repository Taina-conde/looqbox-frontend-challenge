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
    }, [])
    return (
        <li>
            <img src = {`${imagesBaseUrl}/${pokemonStats.id}.svg`} alt = {props.pokemon.name}/>
            <span>{pokemonStats.name}</span>
            <div>{pokemonStats.types.map( index => (<div>
                {index.type.name}
            </div>))}</div>
            
        </li>
    );
};
export default PokemonItem;