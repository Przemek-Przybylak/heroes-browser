import { call, put, takeLatest } from "redux-saga/effects";
import { fetch } from "./fetch"
import {
    fetchList,
    fetchListSuccess,
    fetchListError,
} from "./heroListSlice";

function* fetchHeroesListHandler() {
    try {
        const list = yield call(fetch);
        console.log(list)
        yield put(fetchListSuccess(list));
    } catch (error) {
        yield put(fetchListError("error"));
    }
}

export function* watchFetchHeroesList() {
    yield takeLatest(fetchList.type, fetchHeroesListHandler)
}