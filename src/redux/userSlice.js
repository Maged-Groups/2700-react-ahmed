import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        rdxUser: {
            firstName: 'Maged',
            photo: 'https://assets.about.me/background/users/m/a/g/magedyaseen_1702270532_101.jpg'
        },
        rdxLoggedIn: false
    },
    reducers: {
        rdxLogin: (state) => { state.rdxLoggedIn = true },
        rdxLogout: (state) => { state.rdxLoggedIn = false },
        rdxUpdate: () => { },
    }
});

export default userSlice.reducer;

export const { rdxLogin, rdxLogout, rdxUpdate } = userSlice.actions;