import { createSlice } from "@reduxjs/toolkit"

export const currencyDefaultState = {
        name: 'USD'
};


export const currencySlice = createSlice({
    name: 'currency',
    initialState: currencyDefaultState,
    reducers: {
        setCurrency: (state, action) => action.payload,
        resetCurrency: () => currencyDefaultState
    }
})

export const {setCurrency, resetCurrency} = currencySlice.actions;

export default currencySlice.reducer;