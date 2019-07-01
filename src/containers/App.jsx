import React, { useState, useEffect } from "react";
import { getTools } from "../api";

import { H2, H4 } from "../components/Text";
import Tool from "../components/Tool";

import Search from "./Search";

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
        <H2>VUTTR</H2>
        <H4>Very Useful Tools to Remember</H4>
      </header>

      <section style={sectionStyles}>
        <Search />
        <button>+ Add</button>
      </section>

      <main>
        {isLoading ? <p>Loading...</p> : null}

        {results.map(result => (
          <Tool key={result.id} result={result} />
        ))}
      </main>
    </div>
  );
};

export default App;
