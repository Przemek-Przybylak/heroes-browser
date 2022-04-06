import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: "initial",
    list: {
        results: ""
    }
}

const ListSlice = createSlice({
    name: "heroes",
    initialState,

    reducers: {
        fetchList: (state) => {
            state.status = "loading";
        },
        fetchListSuccess: (state, {payload: list}) => {
            state.list = list;
            state.status = "success";
        },
        fetchListError: (state) => {
            state.status = "error";
        },
    },
});

export const {
    fetchList,
    fetchListSuccess,
    fetchListError,
} = ListSlice.actions;

export const selectHeroesList = (state) => state.heroes.list.results;
export const selectStatus = (state) => state.heroes.status;
export const selectHeroesByQuery = (state, query) => {
    const heroes = selectHeroesList(state);
    if (!query || query.trim() === "") {
        return heroes;
    }
    return heroes.filter(({name}) => name.toUpperCase().includes(query.trim().toUpperCase()));
};

export default ListSlice.reducer;