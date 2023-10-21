import { getAllSearchproperty } from "./type";
import { takeLatest, put, call } from "redux-saga/effects";
import { searchActions } from "./action";
import Apis from "../../../api";

const searchProperty=function * searchProperty(action: any){
    try{
        const payload = action.payload;
    console.log(payload);
        const {data} = yield call(Apis.search, payload);
        yield put(searchActions.setAllSearchdata(data ||[]));  
    }catch(error:any){
        const options = {
            code: error?.response?.status,
            error: error?.response?.data,
          };
          console.log(options);
        yield put(
            searchActions.searchFailed(options)
        )
    }
}
export default function* searchSaga(){
    yield takeLatest(getAllSearchproperty.FETCH_ALL_PROPERTY, searchProperty )
}
