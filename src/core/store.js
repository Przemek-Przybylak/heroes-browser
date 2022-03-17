import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import rootSaga from "./rootSaga";
import heroesReducer from "../features/herosList/heroesListSlice"

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        heroes: heroesReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;