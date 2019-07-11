import { takeEvery, put, call } from "redux-saga/effects";
import * as api from "../api";
import { actionTypes } from "../constants";

function* deleteTool(action) {
  try {
    yield call(api.deleteTool, action.payload.id);
  } catch (e) {}
}

function* modifyToolsSaga() {
  takeEvery(actionTypes.DELETE_TOOL, deleteTool);
}

export { modifyToolsSaga };
