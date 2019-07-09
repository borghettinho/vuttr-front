import React from "react";

import { Card, CardHeader } from "../components/Card";

const Tool = React.memo(props => {
  let tags = props.tool.tags;

  return (
    <Card key={props.tool.id}>
      <CardHeader>
        <a href={props.tool.link} target="_blank" rel="noopener noreferrer">
          {props.tool.title}
        </a>
        <button>X remove</button>
      </CardHeader>
      <p>{props.tool.description}</p>
      <footer />
      {tags.map(tag => (
        <span key={tag}>#{tag}</span>
      ))}
    </Card>
  );
});

export default Tool;
