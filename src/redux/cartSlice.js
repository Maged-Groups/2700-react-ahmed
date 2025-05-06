import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        rdxCartItems: 10,
    },
    reducers: {
        rdxSetCartItems: () => { console.log('Hello') }
    }
});

export default cartSlice.reducer;