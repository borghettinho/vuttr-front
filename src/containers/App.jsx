import React, { useState, useEffect } from "react";
import { getTools } from "../api";

const sectionStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState([]);

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
          <input type="text" placeholder="search" />
          <input type="checkbox" name="toggle-tag" id="toggle-tag" />
          <label htmlFor="toggle-tag">Search in tags only</label>
        </form>

        {/* This calls the "AddArticle" action */}
        <button>+ Add</button>
      </section>

      <main>
        {isLoading ? <p>Loading...</p> : null}
        {results.map(result => (
          <div key={result.key}>
            <p>Title: {result.title}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;
