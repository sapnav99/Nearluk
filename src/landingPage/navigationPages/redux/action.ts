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
export const searchActions={
    fetchAllSearchdata,
    setAllSearchdata,
};