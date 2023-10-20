import { getAllSearchproperty } from "./type";

const initialState={}

const searchReducer=(state=initialState, action:any)=>{
    switch(action.type){
        case getAllSearchproperty.FETCH_ALL_PROPERTY:
            return{
                ...state,
                searchPropertyLoader:true,
                searchProperty:action.payload,
            };
            case getAllSearchproperty.SET_ALL_PROPERTY:
                return{
                    ...state,
                    searchPropertyLoader:false,
                    searchProperty:action.payload,
                };
                case getAllSearchproperty.SEARCH_REQ_FAILED:
                    return{
                        ...state,
                        searchPropertyLoader:false,
                        searchRes:action.payload,
                    }
                default:
                    return state;
    }
}
export default searchReducer;