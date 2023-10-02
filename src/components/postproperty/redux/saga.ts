import Apis from "../../../api";
import { propertyTypes } from "./actionType";
import { takeLatest, put, call } from "redux-saga/effects";
import { propertyAction } from "./actions";

const postPropertyOnServerReq = function* postPropertyOnServerReq(action: any) {
  try {
    const payload = action.payload;
    // console.log(payload);
    const { data } = yield call(Apis.postProperty, payload);
    console.log("response at saga", data);
    yield put(propertyAction.setPostProperty(data || []));
  } catch (e: any) {
    console.log(e);
    yield put(
      propertyAction.setPostProperty({
        code: e.response.status,
        message: e.response.data.message,
      })
    );
  }
};

export default function* propertySaga() {
  yield takeLatest(propertyTypes.FETCH_POST_PROPERTY, postPropertyOnServerReq);
}
