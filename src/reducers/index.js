import { combineReducers } from "redux";

import { getToolsReducer } from "./getTools";
import { modifyToolsReducer } from "./modifyTools";

const rootReducer = combineReducers({
  getToolsReducer,
  modifyToolsReducer
});

export { rootReducer };
