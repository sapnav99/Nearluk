// filtersSaga.js
import { takeLatest, put, call } from "redux-saga/effects";
import { allFilterData } from "./type";
import { filterActions } from "./action";
import Apis from "../../../../api";
function* handleSetFilters(action: any) {
  try {
    const payload = action.payload;
    console.log(payload);
    const { data } = payload;
    yield put(filterActions.setFilters(data || []));
    // yield put({ type: allFilterData.SET_FILTERS, payload: action.payload });
    // yield put(filterActions.setFilters(''));
    // yield localStorage.setItem('filters', JSON.stringify(action.payload));
  } catch (error: any) {
    let errorPayload = {};
    if (error.response) {
      errorPayload = {
        code: error.response.status,
        error: error.response.data,
      };
    }
  }
}
function* handleSearchFilters(action: any) {
  try {
    const payload = action.payload;
    console.log(payload);
    const { data } = yield call(Apis.search, payload);
    yield put(filterActions.setSearchData(data || []));
  } catch (error: any) {
    let errorPayload = {};
    if (error.response) {
      errorPayload = {
        code: error.response.status,
        error: error.response.data,
      };
    }
  }
}
export function* watchFiltersSaga() {
  yield takeLatest(allFilterData.SET_FILTERS, handleSetFilters);
  yield takeLatest(allFilterData.SET_SEARCH_DATA, handleSearchFilters);
}
