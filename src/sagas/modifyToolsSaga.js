import { takeEvery, put, call } from "redux-saga/effects";
import * as api from "../api";
import { actionTypes } from "../constants";

function* deleteTool(action) {
  try {
    yield call(api.deleteTool, action.payload.id);
    const tools = yield call(api.getTools);
    yield put({ type: actionTypes.FETCH_TOOLS_SUCCEED, tools: tools });
  } catch (e) {
    yield put({ type: actionTypes.DELETE_TOOL_FAILED });
  }
}

export function* modifyToolsSaga() {
  yield takeEvery(actionTypes.DELETE_TOOL, deleteTool);
}
