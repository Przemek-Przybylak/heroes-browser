import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import rootSaga from "./rootSaga";
import heroesReducer from "../features/herosList/heroesListSlice";
import heroReducer from "../features/hero/heroSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        heroes: heroesReducer,
        hero: heroReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;