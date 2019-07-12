import { actionTypes } from "../constants";

const actions = {
  deleteTool: id => ({
    type: actionTypes.delete.DELETE_TOOL,
    payload: {
      id: id
    }
  })
};

export { actions };
