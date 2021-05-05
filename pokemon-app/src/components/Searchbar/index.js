import { useState } from "react";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const inputChangeHandler = (event) => {
    setQuery(event.target.value)
  }
  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="Search pokemon"
          value={query}
          onChange={inputChangeHandler}
        />
      </div>
    </form>
  );
};
export default Searchbar;
