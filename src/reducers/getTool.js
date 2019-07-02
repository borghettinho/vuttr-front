import { actionTypes } from "../constants";

const INITIAL_STATE = {
  tools: [],
  byTag: false
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_TOOLS:
      return { ...state };

    case actionTypes.TOGGLE_BY_TAG:
      return { ...state, byTag: !state.byTag };

    default:
      return state;
  }
};

export { reducers };
