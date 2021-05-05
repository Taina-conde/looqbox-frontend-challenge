import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import "./searchbar.css";

const Searchbar = (props) => {
  const [query, setQuery] = useState("");
  const inputChangeHandler = (event) => {
    setQuery(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSearchPokemon(query);
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
export default Searchbar;
