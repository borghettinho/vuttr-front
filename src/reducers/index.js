import { combineReducers } from "redux";

import { fetchToolsReducer } from "./fetchTools";
import { deleteToolReducer } from "./deleteTool";

const rootReducer = combineReducers({
  fetchToolsReducer,
  deleteToolReducer
});

export { rootReducer };
