import { combineReducers } from "redux";
import { loginReducer, userReducer } from "../pages/auth/redux/reducer";
import postPropertyReducer from "../components/postproperty/redux/reducer";
import homeReducer from "../pages/Home/redux/reducer";
import userPropDetailsReducer from "../pages/propertydetailingpage/redux/reducer";
import NearuReducer from "../pages/Near-U/redux/reducer";
import PostpropertyReducer from "../pages/PostProperty/redux/reducer"

export const rootReducer = combineReducers({
  postPropertyReducer,
  homeReducer,
  loginReducer,
  userReducer,
  userPropDetailsReducer,
  NearuReducer,
  PostpropertyReducer
});

export const getRootReducer = () => rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
