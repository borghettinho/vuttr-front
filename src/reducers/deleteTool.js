import { actionTypes } from "../constants";

const INITIAL_STATE = {
  newTitle: "",
  newLink: "",
  newDescription: "",
  newTags: [""]
};

const deleteToolReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.delete.DELETE_TOOL:
      return { ...state };

    case actionTypes.delete.DELETE_TOOL_SUCCEED:
      return { ...state };

    case actionTypes.delete.DELETE_TOOL_FAILED:
      return { ...state };

    default:
      return state;
  }
};

export { deleteToolReducer };
