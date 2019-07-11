import { actionTypes } from "../constants";

const INITIAL_STATE = {
  newTitle: "",
  newLink: "",
  newDescription: "",
  newTags: [""]
};

const modifyToolsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.DELETE_TOOL:
      return { ...state };

    default:
      return state;
  }
};

export { modifyToolsReducer };
