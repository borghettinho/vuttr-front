import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectors } from "../selectors/getTools";
import { actions } from "../actions/getTools";

import { H2, H4 } from "../components/Text";
import ToolList from "../components/ToolList";

import Search from "./Search";

const sectionStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};

const App = () => {
  const dispatch = useDispatch();
  const fetchTools = () => dispatch(actions.searchTools(""));

  const tools = useSelector(selectors.getTools);

  useEffect(() => {
    fetchTools();
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
        <ToolList tools={tools} />
      </main>
    </div>
  );
};

export default App;
