import { createSlice } from "@reduxjs/toolkit";

const ListSlice = createSlice({
    name: "heroes",
    initialState: {
        status: "initial",
    },
    reducers: {
        fetchList: (state) => {
            state.status = "loading";
        },
        fetchListSuccess: (state,  payload) => {
            state.heroes = payload;
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
    fetchListError
} = ListSlice.actions;

export const selectHeroes = (state) => state

export default ListSlice.reducer;