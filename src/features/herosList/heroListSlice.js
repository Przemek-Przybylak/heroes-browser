import { createSlice } from "@reduxjs/toolkit";

const ListSlice = createSlice({
    name: "heroes",
    initialState: {
        heroes: [],
        status: "initial",
    },
    reducers: {
        fetchList: (state) => {
            state.status = "loading";
        },
        fetchListSuccess: (state, { payload: list }) => {
            state.heroes = list;
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

export const selectHeroes = (state) => state.list.heroes

export default ListSlice.reducer;