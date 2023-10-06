import { getAllpropdata } from "./type";
import { takeLatest, put, call } from "redux-saga/effects";
import { allpropdataactions } from "./action";
import Apis from "../../../api";

const getAllPropertyReq = function* getAllPropertyReq() {
  try {
    const { data } = yield call(Apis.getAllProductApi);
    yield put(allpropdataactions.setAllProperty(data.data || []));
  } catch (err:any) {
    yield put(
      allpropdataactions.setAllProperty({
        code: err.response.status,
        msg: err.response.data,
      })
    );
  }

};
export default function* homeSaga() {
  yield takeLatest(getAllpropdata.FETCH_ALL_PROPERTY, getAllPropertyReq);
}
