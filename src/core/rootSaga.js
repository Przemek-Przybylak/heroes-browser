import { all } from "@redux-saga/core/effects";
import { watchFetchHeroesList } from "../features/herosList/heroesListSaga";

export default function* rootSaga() {
    yield all([watchFetchHeroesList(),])
}