import React from "react";

import { H2, H4 } from "./Text";
import ToolList from "../containers/ToolList";

import Search from "../containers/Search";

const sectionStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};

const App = () => {
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
        <ToolList />
      </main>
    </div>
  );
};

export default App;
