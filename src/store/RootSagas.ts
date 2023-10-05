import { takeEvery, all, fork, SelectEffect, select } from "redux-saga/effects";
import propertySaga from "../components/postproperty/redux/saga";
import homeSaga from "../pages/Home/redux/saga";
import { loginSaga } from "../pages/auth/redux/sagas";
function* watchAndLog() {
  yield takeEvery("*", function* logger(action) {
    const state: SelectEffect = yield select();
    console.debug("action", action);
    console.debug("state after", state);
  });
}

export default function* root() {
  const allForks = [fork(propertySaga), fork(homeSaga), fork(loginSaga)];
  if (process.env.NODE_ENV === "development") {
    allForks.unshift(fork(watchAndLog));
  }
  yield all(allForks);
}
