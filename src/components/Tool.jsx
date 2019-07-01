import React from "react";

import { Card } from "../components/Card";

const headerStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};

const buttonStyles = { border: "none", outline: "none" };

const Tool = props => {
  let tags = props.result.tags;

  return (
    <Card key={props.result.id}>
      <header style={headerStyles}>
        <a href={props.result.link} target="_blank">
          {props.result.title}
        </a>
        <button style={buttonStyles}>X remove</button>
      </header>
      <p>{props.result.description}</p>
      <footer />
      {tags.map(tag => (
        <span>#{tag}</span>
      ))}
    </Card>
  );
};

export default Tool;
