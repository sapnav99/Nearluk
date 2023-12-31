import { postpropertyTypes } from "./type";
import { postpropertyAction } from "./action";
import Apis from "../../../api";
import { call, put, takeLatest } from "redux-saga/effects";

const getAllcityReq = function* getAllcityReq(action: any) {
  try {
    const payload = action.payload;
    const { data } = yield call(Apis.googleCityAutoComplete, payload);
    yield put(postpropertyAction.setCityData(data || []));
  } catch (err) {
    console.log(err);
    // yield put(
    //   postpropertyAction.setCityData({
    //     code: err?.response?.status,
    //     msg: err?.response?.data,
    //   })
    // );
    console.log(err);
  }
};

const getAllStateReq = function* getAllStateReq(action: any) {
  try {
    const payload = action.payload;
    const { data } = yield call(Apis.googleCityAutoComplete, payload);
    // console.log("data from saga", data);
    yield put(postpropertyAction.setStateData(data || []));
  } catch (err) {
    // yield put(
    //   postpropertyAction.setStateData({
    //     code: err?.response?.status,
    //     msg: err?.response?.data,
    //   })
    // );
    console.log(err);
  }
};

const getAllLocalityReq = function* getAllLocalityReq(action: any) {
  try {
    const payload = action.payload;
    const { data } = yield call(Apis.googleLocalityAutoComplete, payload);
    yield put(postpropertyAction.setLocalityData(data?.predictions || []));
  } catch (err) {
    // yield put(
    //   postpropertyAction.setLocalityData({
    //     code: err?.response?.status,
    //     msg: err?.response?.data,
    //   })
    // );
    console.log(err);
  }
};

const autoGenerateDiscriptionReq = function* autoGenerateDiscriptionReq(
  action: any
) {
  try {
    const payload = action.payload;
    const { data } = yield call(Apis.autoGenerateDiscription, payload);
    // console.log(data?.data?.choices[0]?.message?.content);
    yield put(
      postpropertyAction.setAutoGenerateDiscription(
        data?.data?.choices[0]?.message?.content || ""
      )
    );
  } catch (err) {
    console.log(err);
  }
};

const postPropertyOnServerReq = function* postPropertyOnServerReq(action: any) {
  try {
    const payload = action.payload;
    // console.log(payload);
    const { data } = yield call(Apis.postProperty, payload);
    yield put(postpropertyAction.setResposeforPostProperty(data || {}));
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export default function* PostPropertySaga() {
  yield takeLatest(postpropertyTypes.FETCH_CITY_DATA, getAllcityReq);
  yield takeLatest(postpropertyTypes.FETCH_STATE_DATA, getAllStateReq);
  yield takeLatest(postpropertyTypes.FETCH_LOCALITY_DATA, getAllLocalityReq);
  yield takeLatest(
    postpropertyTypes.FETCH_AUTOGENERATE_DISCRIPTION,
    autoGenerateDiscriptionReq
  );
  yield takeLatest(
    postpropertyTypes.FETCH_POST_PROPERTY,
    postPropertyOnServerReq
  );
}
