import { actionTypes } from "../constants";

const actions = {
  getTools: () => ({
    type: actionTypes.GET_TOOLS
  }),
  searchTools: value => ({
    type: actionTypes.SEARCH_TOOLS,
    payload: {
      query: value
    }
  }),
  searchByTag: value => ({
    type: actionTypes.SEARCH_BY_TAG,
    payload: {
      query: value
    }
  }),
  toggleByTag: () => ({
    type: actionTypes.TOGGLE_BY_TAG
  })
};

export { actions };
