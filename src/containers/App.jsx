import React, { useState, useEffect } from "react";
import { getTools } from "../api";

import { H2, H4 } from "../components/Text";
import ToolList from "../components/ToolList";

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
      </section>

      <main>
        {isLoading ? <p>Loading...</p> : null}

        <ToolList tools={results} />
      </main>
    </div>
  );
};

export default App;
