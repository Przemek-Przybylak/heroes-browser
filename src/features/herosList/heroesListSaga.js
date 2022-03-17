import { call, put, takeLatest } from "redux-saga/effects";
import {
    fetchList,
    fetchListSuccess,
    fetchListError,
} from "./heroesListSlice";
import {fetchData} from "../../common/fetchData";

function* fetchHeroesListHandler({payload: currentState }) {

    try {
        const list = yield call(fetchData,  currentState );
        yield put(fetchListSuccess(list));
    } catch (error) {
        yield put(fetchListError("error"));
    }
}

export function* watchFetchHeroesList() {
    yield takeLatest(fetchList.type, fetchHeroesListHandler);
}