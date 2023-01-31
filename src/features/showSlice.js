import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: 0 }
export const showSlice = createSlice({
    name: "showData",
    initialState,
    reducers: {
        // showData: ((state) => {
        //     // state.value = state.value
        // }),
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
           state.value>=1? (state.value = state.value - 1):state.value=0;
        },
        incrementbyv: (state, action) => {
            state.value = state.value + action.payload;
        },
    },

});
export const { showData, increment,decrement, incrementbyv } = showSlice.actions;
export default showSlice.reducer;