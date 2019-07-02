import { combineReducers } from "redux";

import { reducers as getToolReducer } from "./getTool";

const reducers = combineReducers({
  getToolReducer
});

export { reducers };
