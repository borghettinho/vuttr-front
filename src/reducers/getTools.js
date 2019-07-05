import { actionTypes } from "../constants";

const INITIAL_STATE = {
  loading: true,
  tools: [],
  byTag: false,
  searchTerm: ""
};

const getToolsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_TOOLS:
      return { ...state };
    case actionTypes.SEARCH_TOOLS:
      return { ...state };
    case actionTypes.SEARCH_BY_TAG:
      return { ...state };
    case actionTypes.TOGGLE_BY_TAG:
      return { ...state, byTag: !state.byTag };

    default:
      return state;
  }
};

export { getToolsReducer };
