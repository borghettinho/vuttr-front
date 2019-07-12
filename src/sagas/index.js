import { fork } from "redux-saga/effects";
import { fetchToolsSaga } from "./fetchTools";
import { deleteToolSaga } from "./deleteTool";

export function* rootSaga() {
  yield fork(fetchToolsSaga);
  yield fork(deleteToolSaga);
}
