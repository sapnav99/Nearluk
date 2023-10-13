import { call, put, takeLatest } from "redux-saga/effects";
import { nearuTypes } from "./types";
import Apis from "../../../api";
import { nearuActions } from "./action";

const getNearuData = function* getNearUData(action: any) {
  try{
    const { data } = yield call(Apis.getNearuDataApi, action.data);
    yield put(nearuActions.setNearudata(data.data || []));
  }catch(err){
    console.log(err)
  }
  
};

export default function* NearuDataSaga() {
  yield takeLatest(nearuTypes.FETCH_NEARU_DATA, getNearuData);
}
