import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
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
        dispatch(addSearchedPokemon(query, stats));
        props.onSearchPokemon(query);
        setQuery("");
      })
      .catch((error) => {
        console.log(error);
        history.push(`/${query}`);
        setQuery("");
      });
  };
  return (
    <div className="searchbar">
      <Link to="/" onClick={() => props.onSearchPokemon("")}>
        <button className="close-search">Close</button>
      </Link>
      <span id="addon-search" className="search-icon text-center">
        <BiSearchAlt2 size={20} />
      </span>
      <form onSubmit={submitHandler} className="form-box">
        <input
          type="search"
          placeholder="Search pokemon"
          value={query}
          onChange={inputChangeHandler}
          aria-describedby="addon-search"
          aria-label="Search"
        />
      </form>
    </div>
  );
};
function mapStateToProps(pokemons) {
  return {
    pokemons,
    pokemonNamesArr: Object.keys(pokemons),
  };
}
export default connect(mapStateToProps)(Searchbar);
