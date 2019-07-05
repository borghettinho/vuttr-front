import { actionTypes } from "../constants";

const INITIAL_STATE = {
  tools: []
};

const getToolsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_TOOLS:
      return { ...state };

    default:
      return state;
  }
};

export { getToolsReducer };
