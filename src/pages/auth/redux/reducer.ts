import { loginTypes, signupTypes } from "./types";

export const loginReducer = (state = [], action: any): any => {
  switch (action.type) {
    case loginTypes.LOGIN_REQ:
      return {
        ...state,
        loading: false,
      };
    case loginTypes.LOGIN_REQ_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isLoggedIn: true,
      };
    case loginTypes.LOGIN_REQ_FAILED:
      return {
        ...state,
        loading: false,
        logRes: action.payload,
      };
    case loginTypes.USER_LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false,
        user: action.payload,
      };
    //Signup starts from here
    case signupTypes.FETCH_SIGNUP_REQ:
      return {
        ...state,
        signupLoading: true,
        signupData: action.payload,
      };
    case signupTypes.SET_SIGNUP_REQ:
      return {
        ...state,
        signupLoading: false,
        signupData: action.payload,
      };
    default:
      return state;
  }
};

const userInitialState: any = {
  jwtToken: undefined,
  user: undefined,
};

export const userReducer = (state = userInitialState, action: any): any => {
  switch (action.type) {
    case loginTypes.SET_USER_DATA:
      const userState: any = action.payload;
      return userState;
    case loginTypes.REMOVE_USER_DATA:
      return userInitialState;
    default:
      return state;
  }
};
