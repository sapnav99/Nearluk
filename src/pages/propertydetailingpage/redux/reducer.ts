import { userPropDetailTypes } from "./type";

const initialState: any = [];
const userPropDetailsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case userPropDetailTypes.FETCH_PROP_DETAILS:
      return {
        ...state,
        userPropLoader: true,
        userProperty: action.payload,
      };
    case userPropDetailTypes.SET_PROP_DETAILS:
      return {
        ...state,
        userPropLoader: false,
        userProperty: action.payload,
      };
    default:
      return state;
  }
};
export default userPropDetailsReducer;
