import {nearuTypes} from "./types"
const fetchNearudata = (payload: any) =>{
    return {
        type: nearuTypes.FETCH_NEARU_DATA,
        data: payload
    }
}

const setNearudata = (payload: any) => {
    return{
        type: nearuTypes.SET_NEARU_DATA,
        data: payload
    }
}

export const nearuActions = {
    fetchNearudata,
    setNearudata
}

