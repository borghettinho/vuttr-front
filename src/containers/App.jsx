import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../actions/getTools";
import { selectors } from "../selectors/getTools";

import { H2, H4 } from "../components/Text";
import ToolList from "../components/ToolList";

import Search from "./Search";

const sectionStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};

const App = () => {
  const tools = useSelector(selectors.getTools);
  const loading = useSelector(selectors.getLoadingState);

  useEffect(() => {
    console.log("hey, i load");
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
        {loading ? <p>Loading...</p> : null}

        <ToolList tools={tools} />
      </main>
    </div>
  );
};

export default App;
