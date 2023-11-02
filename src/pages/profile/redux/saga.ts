
import { call, put, takeLatest } from "redux-saga/effects";
import { useridActions } from "./action";
import { useridTypes } from "./types";
import Apis from "../../../api";

const userPropReq = function* userPropReq(action:any){
    try{
        const payload=action.payload;
        console.log(payload);
        const {property}=yield call(Apis.useridProperty, payload);
        yield put (useridActions.setUserProperty(property || []));
    } catch (error:any) {
        let errorPayload = {};
        if (error.response) {
            errorPayload = {
                code: error.response.status,
                error: error.response.data,
            };
        } else {
            errorPayload = {
                code: 500, 
                error: 'Unknown error occurred',
            };
        }
        yield put(useridActions.setUserProperty(errorPayload));
    }
    }
    export function* useridSaga(){
        yield takeLatest(useridTypes.FETCH_USERPROPERTY, userPropReq)
    }
