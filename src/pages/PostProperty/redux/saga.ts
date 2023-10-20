import { postpropertyTypes } from "./type";
import { postpropertyAction } from "./action";
import Apis from "../../../api";
import { call, put, takeLatest } from "redux-saga/effects";



const getAllcityReq = function* getAllcityReq(action: any){
    try{
        const payload = action.payload
        const {data} = yield call(Apis.googleCityAutoComplete, payload)
        yield put(postpropertyAction.setCityData(data || []))
    }catch(err){
        yield put(postpropertyAction.setCityData({
            code: err?.response?.status,
            msg: err?.response?.data,
        }))
    }
}

const getAllStateReq = function* getAllStateReq(action: any){
    try{
        const payload = action.payload
        const {data} = yield call(Apis.googleCityAutoComplete, payload)
        yield put(postpropertyAction.setStateData(data || []))
    }catch(err){
        yield put(
            postpropertyAction.setStateData({
              code: err?.response?.status,
              msg: err?.response?.data,
            }))
    }
}

const getAllLocalityReq = function* getAllLocalityReq(action: any){
    try{
        const payload = action.payload
        const {data} = yield call(Apis.googleLocalityAutoComplete, payload)
        yield put(postpropertyAction.setLocalityData(data?.predictions || []))
    }catch(err){
        yield put(postpropertyAction.setLocalityData({
            code: err?.response?.status,
        msg: err?.response?.data,
        }))
    }
}

export default function* PostPropertySaga (){
    yield takeLatest(postpropertyTypes.FETCH_CITY_DATA, getAllcityReq)
    yield takeLatest(postpropertyTypes.FETCH_STATE_DATA, getAllStateReq)
    yield takeLatest(postpropertyTypes.FETCH_LOCALITY_DATA, getAllLocalityReq)
}