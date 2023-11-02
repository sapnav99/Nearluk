
import { getAllSearchproperty } from "./type";

const fetchAllSearchdata=(data:any)=>{
return{
    type:getAllSearchproperty.FETCH_ALL_PROPERTY,
    payload:data,
}
}
const setAllSearchdata=(data:any)=>{
    return {
        type:getAllSearchproperty.SET_ALL_PROPERTY,
        payload:data,
    }
}
const searchFailed=(data:any)=>{
    return{
        type:getAllSearchproperty.SEARCH_REQ_FAILED,
        payload:data,
    }
}
const filters=(data:any)=>{
    return{
        type:getAllSearchproperty.SET_FILTERS,
        payload:data,
    }
}
const fetchCategoryProperty=(data:any)=>{
    return{
        type:getAllSearchproperty.FETCH_CATEGORY_PROPERTY,
        payload:data,
    }
    }
    const setCategoryProperty=(data:any)=>{
        return {
            type:getAllSearchproperty.SET_CATEGORY_PROPERTY,
            payload:data,
        }
    }
    const fetchHomeProperty = (data:any)=>{
        return{
            type:getAllSearchproperty.FETCH_HOME_PROPERTY,
            payload:data,
        }
    }
    const setHomeProperty = (data:any)=>{
        return{
         type:getAllSearchproperty.SET_HOME_PROPERTY,
         payload:data,
        }
    }
export const searchActions={
    fetchAllSearchdata,
    setAllSearchdata,
    searchFailed,
    filters,
    fetchCategoryProperty,
    setCategoryProperty,
    fetchHomeProperty,
    setHomeProperty,
};
