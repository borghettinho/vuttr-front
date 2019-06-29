import React, { useState, useEffect } from "react";
import { getTools } from "../api";

const sectionStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};

const App = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    getTools().then(response => setTools(response));
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
        <p>{tools.length}</p>
      </main>
    </div>
  );
};

export default App;
