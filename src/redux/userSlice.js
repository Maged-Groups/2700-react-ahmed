import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        rdxUser: null,
        rdxLoggedIn: false
    },
    reducers: {
        rdxLogin: (state, action) => {
            state.rdxLoggedIn = true;
            state.rdxUser = action.payload;
        },
        rdxLogout: (state) => { state.rdxLoggedIn = false },
        rdxUpdate: () => { },
    }
});

export default userSlice.reducer;

export const { rdxLogin, rdxLogout, rdxUpdate } = userSlice.actions;