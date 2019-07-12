import { takeEvery, put, call } from "redux-saga/effects";
import * as api from "../api";
import { actionTypes } from "../constants";

function* deleteTool(action) {
  try {
    yield call(api.deleteTool, action.payload.id);
    const tools = yield call(api.getTools);
    yield put({ type: actionTypes.delete.FETCH_TOOLS_SUCCEED, tools: tools });
  } catch (e) {
    yield put({ type: actionTypes.delete.DELETE_TOOL_FAILED });
  }
}

export function* deleteToolSaga() {
  yield takeEvery(actionTypes.delete.START_DELETE, deleteTool);
}
