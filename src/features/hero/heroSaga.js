import {call, put, takeLatest} from "redux-saga/effects";
import {
    fetchHero,
    fetchHeroSuccess,
    fetchHeroError,
} from "./heroSlice";
import {fetchData} from "../../common/fetchData";

function* fetchHeroHandler({payload: currentState}) {
    try {
        const hero = yield call(fetchData, currentState);
        yield put(fetchHeroSuccess(hero));
    } catch (error) {
        yield put(fetchHeroError("error"));
    }
}

export function* watchFetchHero() {
    yield takeLatest(fetchHero.type, fetchHeroHandler);
}