import { call, put, takeLatest } from "redux-saga/effects";
import Apis from "../../../api";
import { userPropDetailTypes } from "./type";
import {allUserPropDetailsActions} from "./action"

const getPropDetailsById = function* getPropDetailsById(action: any) {
  try {
    // console.log("userPropDeails Saga Called", action.payload);
    const { data } = yield call(Apis.userPropDetailsById, action.payload);
    console.log("property data", data);
    yield put(allUserPropDetailsActions.setPropDetails(data.data || []));
  } catch (err) {
    console.error("Error fetching property details:", err);
  }
};

export default function* userPropDetailsSaga() {
  yield takeLatest(userPropDetailTypes.FETCH_PROP_DETAILS, getPropDetailsById);
}
