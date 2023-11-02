import { getAllSearchproperty } from "./type";

const initialState = {
    loading: false,
    searchProperty: null,
    searchRes: null,
  };

const searchReducer=(state=initialState, action:any)=>{
    switch(action.type){
        case getAllSearchproperty.FETCH_ALL_PROPERTY:
            return{
                ...state,
                loading:true,
                searchProperty:action.payload,
            };
            case getAllSearchproperty.SET_ALL_PROPERTY:
                return{
                    ...state,
                    loading:false,
                    searchProperty:action.payload,
                };
                case getAllSearchproperty.SET_FILTERS:
                    return{
                        ...state,
                        ...action.payload,
                    }
                case getAllSearchproperty.SEARCH_REQ_FAILED:
                    return{
                        ...state,
                        loading:false,
                        searchRes:action.payload,
                    }
                    case getAllSearchproperty.FETCH_CATEGORY_PROPERTY:
                        return{
                            ...state,
                            loading:action.payload,
                        }
                        case getAllSearchproperty.SET_CATEGORY_PROPERTY:
                            return{
                                ...state,
                                loading:action.payload,
                            }
                            case getAllSearchproperty.FETCH_HOME_PROPERTY:
                        return{
                            ...state,
                            loading:action.payload,
                        }
                        case getAllSearchproperty.SET_HOME_PROPERTY:
                            return{
                                ...state,
                                loading:action.payload,
                            }
                default:
                    return state;
    }
}
export default searchReducer;
