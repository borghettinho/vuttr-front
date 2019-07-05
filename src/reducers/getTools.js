import { actionTypes } from "../constants";

const INITIAL_STATE = {
  loading: true,
  tools: [],
  byTag: false
};

const getToolsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_TOOLS:
      return { ...state, loading: true };

    case actionTypes.SEARCH_TOOLS:
      return { ...state, loading: true };

    case actionTypes.SEARCH_BY_TAG:
      return { ...state, loading: true };

    case actionTypes.TOGGLE_BY_TAG:
      return { ...state, byTag: !state.byTag };

    case actionTypes.GOT_TOOLS:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export { getToolsReducer };
