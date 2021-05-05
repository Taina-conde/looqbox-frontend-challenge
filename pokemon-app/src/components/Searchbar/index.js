import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const inputChangeHandler = (event) => {
    setQuery(event.target.value)
  }
  return (
    <form>
      <div>
        <input
          type="search"
          placeholder= "Search pokemon"
          value={query}
          onChange={inputChangeHandler}
        />
      </div>
      <BiSearchAlt2/>
    </form>
  );
};
export default Searchbar;
