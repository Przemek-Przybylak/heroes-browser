import {createSlice} from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "hero",
    initialState: {
        status: "initial",
        person: {}
    },
    reducers: {
        fetchHero: (state) => {
            state.status = "loading";
        },
        fetchHeroSuccess: (state, {payload: hero}) => {
            state.person = hero;
            state.status = "success";
        },
        fetchHeroError: (state) => {
            state.status = "error";
        },
    },
});

export const {
    fetchHero,
    fetchHeroSuccess,
    fetchHeroError,
} = peopleSlice.actions;

export const selectHero = (state) => state.hero.person;

export default peopleSlice.reducer;
