import React from "react";

const toolStyles = {
  border: "1px solid #eee",
  borderRadius: "2%",
  margin: "1.5rem 0",
  padding: "0.5rem",
  boxShadow: "1px 1px 3px rgba(0,0,0,0.2)"
};

const Tool = props => {
  let tags = props.result.tags;

  return (
    <div key={props.result.id} style={toolStyles}>
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <a href={props.result.link} target="_blank">
          {props.result.title}
        </a>
        <button style={{ border: "none", outline: "none" }}>X remove</button>
      </header>
      <p>{props.result.description}</p>
      <footer />
      {tags.map(tag => (
        <span>#{tag}</span>
      ))}
    </div>
  );
};

export default Tool;
