import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
    name: 'settingSlice',
    initialState: {
        rdxLang: 'en',
        rdxDark: false,
        rdxShowModal: false
    },
    reducers: {
        rdxSetLang: () => { },
        rdxSetDarkMode: (state) => { state.rdxDark = !state.rdxDark },
        rdxModalVisibility: () => { },
    }
});


export default settingSlice.reducer;

export const { rdxSetDarkMode } = settingSlice.actions;