import { put, call, takeEvery } from "redux-saga/effects";
import { getTools, searchTools } from "../api";
import { actionTypes } from "../constants";

function* fetchTools(action) {
  try {
    const tools = yield call(searchTools, action.payload.query);
    yield put({ type: actionTypes.FETCH_TOOLS_SUCCEED, tools: tools });
  } catch (error) {
    yield put({ type: actionTypes.FETCH_TOOLS_FAILED, message: error.message });
  }
}

export function* fetchToolsSaga() {
  yield takeEvery(actionTypes.SEARCH_TOOLS, fetchTools);
}
