import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: "filter",
    initialState: '',
    reducers: {
        setFilter(state, action) {
            return action.payload;
        },
    },
});
// Експортуємо генератори екшенів та редюсер
export const {setFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
