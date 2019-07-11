import { fork } from "redux-saga/effects";
import { fetchToolsSaga } from "./fetchToolsSaga";
import { modifyToolsSaga } from "./modifyToolsSaga";

export function* rootSaga() {
  yield fork(fetchToolsSaga);
  yield fork(modifyToolsSaga);
}
