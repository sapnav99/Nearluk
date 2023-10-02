import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import rootSagas from "./RootSagas";
import { rootReducer } from "./RootReducer";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage: storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);
sagaMiddleware.run(rootSagas);
export { store, persistor };
