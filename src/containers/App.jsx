import React, { useState, useEffect } from "react";
import { getTools } from "../api";
import Tool from "../components/Tool";

const sectionStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterByTag, setFilterByTag] = useState(false);

  useEffect(() => {
    getTools().then(results => {
      setResults(results);
      setIsLoading(false);
    });
  }, []);

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

        {/* This calls the "AddArticle" action */}
        <button>+ Add</button>
      </section>

      <main>
        {isLoading ? <p>Loading...</p> : null}

        {results.map(result => (
          <Tool result={result} />
        ))}
      </main>
    </div>
  );
};

export default App;
