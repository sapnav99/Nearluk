import { loginTypes, signupTypes } from "./types";

function loginReq() {
  return {
    type: loginTypes.LOGIN_REQ,
    // payload: userData,
  };
}

function loginReqSuccess(userData: any): any {
  return {
    type: loginTypes.LOGIN_REQ_SUCCESS,
    payload: userData,
  };
}

function loginReqFailed(data: any): any {
  return {
    type: loginTypes.LOGIN_REQ_FAILED,
    payload: data,
  };
}
function loggedOut() {
  return {
    type: loginTypes.USER_LOGGED_OUT,
    payload: null,
  };
}
function setUserData(userData: any): any {
  return {
    type: loginTypes.SET_USER_DATA,
    payload: userData,
  };
}

function removeUserData(): any {
  return {
    type: loginTypes.REMOVE_USER_DATA,
  };
}
//SIGNUP STARTS FROM HERE
function fetchSignup(data: any): any {
  return {
    payload: data,
    type: signupTypes.FETCH_SIGNUP_REQ,
  };
}
function setSignup(data: any): any {
  return {
    payload: data,
    type: signupTypes.SET_SIGNUP_REQ,
  };
}
export const LoginActions = {
  loginReq,
  loginReqSuccess,
  loginReqFailed,
  loggedOut,
  setUserData,
  removeUserData,
  fetchSignup,
  setSignup,
};
