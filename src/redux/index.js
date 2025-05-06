import { configureStore } from "@reduxjs/toolkit";

import cartSlice from './cartSlice';
import userSlice from './userSlice';
import settingSlice from './settingSlice';

export default configureStore({
    reducer: {
        cartSlice,
        userSlice,
        settingSlice
    }
});