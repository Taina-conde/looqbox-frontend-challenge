import {connect } from 'react-redux';
const PokemonView = (props) => {
    console.log('props', props)
    return (
        <div>
            
        </div>
    )
}
function mapStateToProps(pokemons) {
    
    return {
        pokemons,
    }
}
export default connect(mapStateToProps)(PokemonView);