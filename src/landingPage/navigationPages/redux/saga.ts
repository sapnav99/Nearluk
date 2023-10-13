import { getAllSearchproperty } from "./type";
import { takeLatest, put, call } from "redux-saga/effects";
import { searchActions } from "./action";
import Apis from "../../../api";

const searchProperty=function * searchProperty(action: any){
    try{
        const payload = action.payload;
    console.log(payload);
        const {data} = yield call(Apis.getSearchApi, payload);
        yield put(searchActions.setAllSearchdata(data.data ||[]));  
    }catch(error:any){
        yield put(
            searchActions.setAllSearchdata({
                code:error.response.status,
                msg:error.response.data,
            })
        )
    }
}
export default function* searchSaga(){
    yield takeLatest(getAllSearchproperty.FETCH_ALL_PROPERTY, searchProperty )
}