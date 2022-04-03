import { all } from "@redux-saga/core/effects";
import { watchFetchHeroesList } from "../features/herosList/heroesListSaga";
import {watchFetchHero} from "../features/hero/heroSaga";

export default function* rootSaga() {
    yield all([watchFetchHeroesList(), watchFetchHero(),])
}