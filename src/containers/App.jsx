import React, { useState, useEffect } from "react";
import { getTools, searchTools, searchTags } from "../api";

const sectionStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [filterByTag, setFilterByTag] = useState(false);

  useEffect(() => {
    getTools().then(results => {
      setResults(results);
      setIsLoading(false);
    });
  }, []);

  const handleFilter = () => setFilterByTag(!filterByTag);
  const performSearch = value => console.log(value);

  return (
    <div>
      <header>
        <h2>VUTTR</h2>
        <h4>Very Useful Tools to Remember</h4>
      </header>

      <section style={sectionStyles}>
        {/* This form handles the search logic */}
        <form>
          <input
            type="text"
            placeholder="search"
            onChange={e => performSearch(e.target.value)}
          />
          <input
            type="checkbox"
            name="toggle-tag"
            id="toggle-tag"
            checked={filterByTag}
            onChange={() => handleFilter()}
          />
          <label htmlFor="toggle-tag">Search in tags only</label>
        </form>

        {/* This calls the "AddArticle" action */}
        <button>+ Add</button>
      </section>

      <main>
        {isLoading ? <p>Loading...</p> : null}
        {results.map(result => (
          <div key={result.id}>
            <p>Title: {result.title}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;
