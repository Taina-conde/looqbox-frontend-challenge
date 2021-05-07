import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { BiSearchAlt2 } from "react-icons/bi";
import "./searchbar.css";
import { connect } from "react-redux";
import { P } from "../../api";
import { addSearchedPokemon } from "../../redux/actions";

const Searchbar = (props) => {
  const [query, setQuery] = useState("");

  let history = useHistory();

  const { pokemonNamesArr, dispatch } = props;

  const inputChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (pokemonNamesArr.includes(query)) {
      props.onSearchPokemon(query);
      setQuery("");
    }
    P.getPokemonByName(query)
    .then((stats) => {
      dispatch(addSearchedPokemon(query, stats))
      props.onSearchPokemon(query);
    })
    .catch((error) => {
      console.log(error);
      history.push(`/${query}`);
    });
    setQuery("");
  };
  return (
    <form className="form-box" onSubmit={submitHandler}>
      <div className="input-group">
        <span className="input-group-text" id="addon-search">
          <BiSearchAlt2 size={20} />
        </span>

        <input
          className="form-control"
          type="search"
          placeholder="Search pokemon"
          value={query}
          onChange={inputChangeHandler}
          aria-describedby="addon-search"
          aria-label="Search"
        />
      </div>
    </form>
  );
};
function mapStateToProps(pokemons) {
  return {
    pokemons,
    pokemonNamesArr : Object.keys(pokemons),
  };
}
export default connect(mapStateToProps)(Searchbar);
