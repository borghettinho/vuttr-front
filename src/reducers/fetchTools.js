import { actionTypes } from "../constants";

const INITIAL_STATE = {
  loading: false,
  fetchedTools: [],
  byTag: false
};

const fetchToolsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.fetch.GET_TOOLS:
      return { ...state, loading: true };

    case actionTypes.fetch.SEARCH_TOOLS:
      return { ...state, loading: true };

    case actionTypes.fetch.SEARCH_BY_TAG:
      return { ...state, loading: true };

    case actionTypes.fetch.TOGGLE_BY_TAG:
      return { ...state, byTag: !state.byTag };

    case actionTypes.fetch.FETCH_TOOLS_SUCCEED:
      return { ...state, loading: false, fetchedTools: action.tools };

    case actionTypes.fetch.FETCH_TOOLS_FAILED:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export { fetchToolsReducer };
