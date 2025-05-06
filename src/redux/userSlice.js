import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        rdxUser: {
            firstName: 'Maged',
            photo: 'https://assets.about.me/background/users/m/a/g/magedyaseen_1702270532_101.jpg'
        },
        rdxLoggedIn: true
    },
    reducers: {
        rdxLogin: () => { },
        rdxLogout: () => { },
        rdxUpdate: () => { },
    }
});

export default userSlice.reducer;