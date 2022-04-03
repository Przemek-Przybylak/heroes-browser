import { createSlice } from "@reduxjs/toolkit";

const ListSlice = createSlice({
    name: "heroes",
    initialState: {
        status: "initial",
        list: {
            results: ""
        }
    },
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

export const selectHeroesList = (state) => state.heroes.list.results

export default ListSlice.reducer;