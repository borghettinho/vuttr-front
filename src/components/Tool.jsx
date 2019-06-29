import React from "react";

const Tool = props => {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Link: {props.link}</p>
      <p>Description: {props.description}</p>
      <p>Tags: []</p>
    </div>
  );
};

export default Tool;
