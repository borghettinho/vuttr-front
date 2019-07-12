import { actionTypes } from "../constants";

const actions = {
  getTools: () => ({
    type: actionTypes.fetch.GET_TOOLS
  }),
  searchTools: value => ({
    type: actionTypes.fetch.SEARCH_TOOLS,
    payload: {
      query: value
    }
  }),
  searchByTag: value => ({
    type: actionTypes.fetch.SEARCH_TAGS,
    payload: {
      query: value
    }
  }),
  toggleByTag: () => ({
    type: actionTypes.fetch.TOGGLE_BY_TAG
  })
};

export { actions };
