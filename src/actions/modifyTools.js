import { actionTypes } from "../constants";

const actions = {
  deleteTool: id => ({
    type: actionTypes.DELETE_TOOL,
    payload: {
      id: id
    }
  })
};

export { actions };
