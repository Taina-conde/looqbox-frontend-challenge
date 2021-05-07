import { connect } from 'react-redux';
const PokemonView = (props) => {
    const {pokemon} = props;
    
    return (
        <div>
           {pokemon.name}
        </div>
    )
}
function mapStateToProps( pokemons, {match}) {
    const { pokemonName } = match.params
    return {
        pokemon: pokemons[pokemonName]
    }
}
export default connect(mapStateToProps)(PokemonView);