import { call, takeLatest } from "redux-saga/effects";
import { nearuTypes } from "./types";
import Apis from "../../../api";

const getNearuData = function* getNearUData(action: any) {
  console.log("Hello from saga", action.data);
  const { data } = yield call(Apis.getNearuDataApi, action.data);
  console.log("data from saga", data);
};

export default function* NearuDataSaga() {
  yield takeLatest(nearuTypes.FETCH_NEARU_DATA, getNearuData);
}
