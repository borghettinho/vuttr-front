import React, { useState } from "react";
import { TextInput } from "../components/Input";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterByTag, setFilterByTag] = useState(false);
  const [debouncedSearch] = useDebouncedCallback(value => {
    // TODO - Find some way to fetch data from search
    setSearchTerm(value);
  }, 1000);

  return (
    <form>
      <TextInput
        type="text"
        placeholder="Search"
        onChange={e => debouncedSearch(e.target.value)}
      />
      <input
        type="checkbox"
        name="toggle-tag"
        id="toggle-tag"
        checked={filterByTag}
        onChange={() => setFilterByTag(!filterByTag)}
      />
      <label htmlFor="toggle-tag">Tags only</label>
      <button>+ Add</button>
      <p>{searchTerm}</p>
    </form>
  );
};

export default Search;
