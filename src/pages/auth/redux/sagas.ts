import { call, put, takeLatest } from "redux-saga/effects";
import { LoginActions } from "./actions";
import { loginTypes, signupTypes } from "./types";
import Apis from "../../../api";



const login = function* login(action: any) {
  try {
    const payload = action.payload;
    console.log(payload);
    const { data } = yield call(Apis.login, payload);
    if (data.status === false) {
      yield put(LoginActions.loginReqFailed(data));
    }

  } catch (error: any) {
    console.log("error", error?.response?.data);
    yield put(LoginActions.loginReqFailed(error?.response?.data));
  }
};
const signupReq = function* signupReq(action: any) {
  try {
    const payload = action.payload;
    console.log(payload);
    const { data } = yield call(Apis.signup, payload);
    yield put(LoginActions.setSignup(data || []));
  } catch (error: any) {
    const options = {
      code: error?.response?.status,
      error: error?.response?.data,
    };
    console.log(options);
    yield put(LoginActions.setSignup(options));
  }
};
export function* loginSaga() {
  yield takeLatest(loginTypes.LOGIN_REQ, login);
  yield takeLatest(signupTypes.FETCH_SIGNUP_REQ, signupReq);
}
