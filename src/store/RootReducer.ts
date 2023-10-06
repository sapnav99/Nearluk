import { combineReducers } from "redux";
import { loginReducer, userReducer } from "../pages/auth/redux/reducer";
import postPropertyReducer from "../components/postproperty/redux/reducer";
import homeReducer from "../pages/Home/redux/reducer";
import userPropDetailsReducer from "../pages/propertydetailingpage/redux/reducer";

export const rootReducer = combineReducers({
  postPropertyReducer,
  homeReducer,
  loginReducer,
  userReducer,
  userPropDetailsReducer,
});

export const getRootReducer = () => rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
