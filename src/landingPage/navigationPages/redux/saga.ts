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
const categoryProperty=function * categoryProperty(action: any){
    try{
        const payload = action.payload;
    console.log(payload);
        const {data} = yield call(Apis.category, payload);
        yield put(searchActions.setCategoryProperty(data ||[]));  
    }catch (error:any) {
        let errorPayload = {};
        if (error.response) {
            errorPayload = {
                code: error.response.status,
                error: error.response.data,
            };
        } else {
            errorPayload = {
                code: 500, 
                error: 'Unknown error occurred',
            };
        }
        yield put(searchActions.setCategoryProperty(errorPayload));
    }
    }
    const homeProperty=function * homeProperty(action: any){
        try{
            const payload = action.payload;
        console.log(payload);
            const {data} = yield call(Apis.home, payload);
            yield put(searchActions.setHomeProperty(data ||[]));  
        }catch (error:any) {
            let errorPayload = {};
            if (error.response) {
                errorPayload = {
                    code: error.response.status,
                    error: error.response.data,
                };
            } else {
                errorPayload = {
                    code: 500, 
                    error: 'Unknown error occurred',
                };
            }
            yield put(searchActions.setHomeProperty(errorPayload));
        }
        }
    
export default function* searchSaga(){
    yield takeLatest(getAllSearchproperty.FETCH_ALL_PROPERTY, searchProperty );
    yield takeLatest(getAllSearchproperty.FETCH_CATEGORY_PROPERTY, categoryProperty );
    yield takeLatest(getAllSearchproperty.FETCH_HOME_PROPERTY, homeProperty );
}
