import React from "react";

import { Card, CardHeader } from "../components/Card";

const buttonStyles = { border: "none", outline: "none" };

const Tool = props => {
  let tags = props.result.tags;

  return (
    <Card key={props.result.id}>
      <CardHeader>
        <a href={props.result.link} target="_blank" rel="noopener noreferrer">
          {props.result.title}
        </a>
        <button style={buttonStyles}>X remove</button>
      </CardHeader>
      <p>{props.result.description}</p>
      <footer />
      {tags.map(tag => (
        <span key={tag}>#{tag}</span>
      ))}
    </Card>
  );
};

export default Tool;
