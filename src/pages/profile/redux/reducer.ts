import { useridTypes } from "./types";

const initialState = {
    loading: false,
    userData: null,
    error: null
};

export const useridReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case useridTypes.FETCH_USERPROPERTY:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case useridTypes.SET_USERPROPERTY:
            return {
                ...state,
                loading: false,
                userData: action.payload,
            };
        default:
            return state;
    }
};
