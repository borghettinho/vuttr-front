import React, { useState } from "react";
import { TextInput } from "../components/Input";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterByTag, setFilterByTag] = useState(false);

  return (
    <form>
      <TextInput
        type="text"
        placeholder="search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <input
        type="checkbox"
        name="toggle-tag"
        id="toggle-tag"
        checked={filterByTag}
        onChange={() => setFilterByTag(!filterByTag)}
      />
      <label htmlFor="toggle-tag">Search in tags only</label>
    </form>
  );
};

export default Search;
