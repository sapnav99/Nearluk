import {userPropDetailTypes} from "./type"

export const fecthPropDetails = (data: any) => {
    return{
        type: userPropDetailTypes.FETCH_PROP_DETAILS,
        payload: data
    }
}

export const setPropDetails = (data: any) => {
    return {
      type: userPropDetailTypes.SET_PROP_DETAILS,
      payload: data,
    };
}

export const allUserPropDetailsActions = {
  fecthPropDetails,
  setPropDetails,
};