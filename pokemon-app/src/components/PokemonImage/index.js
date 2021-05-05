const imagesBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world'
const PokemonImage = (props) => {
    return (
        <div>
            {props.id && (<img
                src = {`${imagesBaseUrl}/${props.id}.svg`}
                alt = {props.name}
            />)}
            
        </div>
    )
}
export default PokemonImage;