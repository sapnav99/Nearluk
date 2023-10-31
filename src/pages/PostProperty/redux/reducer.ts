import {postpropertyTypes} from "./type"


const PostpropertyReducer = (state= [], action: any) => {
    switch(action.type) {
        //For getting City
        case postpropertyTypes.FETCH_CITY_DATA:
            return {
                ...state,
                cityLoader: true,
                getCity: []
            }
        case postpropertyTypes.SET_CITY_DATA:
            return{
                ...state,
                cityLoader: false,
                getCity: action.payload
            }
        //For getting State
        case postpropertyTypes.FETCH_STATE_DATA:
            return{
                ...state,
                stateLoader: true,
                getState: []
            }
        case postpropertyTypes.SET_STATE_DATA:
            return{
                ...state,
                stateLoader: false,
                getState: action.payload
            }
        //For Getting Locality
        case postpropertyTypes.FETCH_LOCALITY_DATA:
            return{
                ...state,
                localityLoader: true,
                getLocality: []
            }
        case postpropertyTypes.SET_LOCALITY_DATA:
            return{
                ...state,
                localityLoader: false,
                getLocality: action.payload
            }
        case postpropertyTypes.SET_PROPERTY_STATE:
            return{
                ...state,
                propertyState: action.payload
            }
        case postpropertyTypes.FETCH_POST_PROPERTY:
            return{
                ...state,
                postPopertyloader: true,
            }
        case postpropertyTypes.SET_RESPONSE_FOR_POST_PROPERTY:
            return{
                ...state,
                response: action.payload
            }
        default:
            return state;
    }
}

export default PostpropertyReducer