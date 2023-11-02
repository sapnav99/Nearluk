import { useridTypes } from "./types";

function fetchUserProperty(property:any):any{
    return{
        payload:property,
        type:useridTypes.FETCH_USERPROPERTY
    }
}

function setUserProperty(property:any):any{
    return {
        type:useridTypes.SET_USERPROPERTY,
        payload:property,
    }
}
export const useridActions = {
    fetchUserProperty,
    setUserProperty
};