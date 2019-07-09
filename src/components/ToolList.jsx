import React from "react";
import Tool from "./Tool";

const ToolList = React.memo(props => {
  return (
    <div>
      {props.tools.map(tool => (
        <Tool key={tool.id} tool={tool} />
      ))}
    </div>
  );
});

export default ToolList;
