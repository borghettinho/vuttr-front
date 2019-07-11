import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectors } from "../selectors/getTools";
import { actions as fetchActions } from "../actions/getTools";
import { actions as modifyActions } from "../actions/modifyTools";

import Tool from "../components/Tool";

const ToolList = React.memo(() => {
  const dispatch = useDispatch();
  const fetchTools = () => dispatch(fetchActions.getTools());
  const deleteTool = id => dispatch(modifyActions.deleteTool(id));

  const tools = useSelector(selectors.getTools);

  useEffect(() => {
    fetchTools();
  }, []);

  const handleDelete = id => deleteTool(id);

  return (
    <div>
      {tools.map(tool => (
        <Tool key={tool.id} tool={tool} onDelete={handleDelete} />
      ))}
    </div>
  );
});

export default ToolList;
