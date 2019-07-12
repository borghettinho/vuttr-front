import { put, call, takeEvery } from "redux-saga/effects";
import * as api from "../api";
import { actionTypes } from "../constants";

function* getTools() {
  try {
    const tools = yield call(api.getTools);
    yield put({ type: actionTypes.fetch.FETCH_TOOLS_SUCCEED, tools: tools });
  } catch (error) {
    yield put({
      type: actionTypes.fetch.FETCH_TOOLS_FAILED,
      message: error.message
    });
  }
}

function* searchTools(action) {
  try {
    const tools = yield call(api.searchTools, action.payload.query);
    yield put({ type: actionTypes.fetch.FETCH_TOOLS_SUCCEED, tools: tools });
  } catch (error) {
    yield put({
      type: actionTypes.fetch.FETCH_TOOLS_FAILED,
      message: error.message
    });
  }
}

function* fetchToolsByTag(action) {
  try {
    const tools = yield call(api.searchTags, action.payload.query);
    yield put({ type: actionTypes.fetch.FETCH_TOOLS_SUCCEED, tools: tools });
  } catch (error) {
    yield put({
      type: actionTypes.fetch.FETCH_TOOLS_FAILED,
      message: error.message
    });
  }
}

export function* fetchToolsSaga() {
  yield takeEvery(actionTypes.fetch.GET_TOOLS, getTools);
  yield takeEvery(actionTypes.fetch.SEARCH_TOOLS, searchTools);
  yield takeEvery(actionTypes.fetch.SEARCH_TAGS, fetchToolsByTag);
}
