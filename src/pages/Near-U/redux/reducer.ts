import { nearuTypes } from "./types";

const initialState: any = []
const NearuReducer = (state=initialState, action: any) => {
    switch(action.type) {
        case nearuTypes.FETCH_NEARU_DATA:
            return{
                ...state,
                nearuLoader: true,
                latlng: action.payload
            }
        case nearuTypes.SET_NEARU_DATA:
            return {
              ...state,
              nearuLoader: false,
              nearuData: action.payload
            };
        default :
            return state
    }

}
export default NearuReducer