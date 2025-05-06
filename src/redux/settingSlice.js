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
        rdxSetDarkMode: () => { },
        rdxModalVisibility: () => { },
    }
});


export default settingSlice.reducer;