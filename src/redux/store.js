import { configureStore } from '@reduxjs/toolkit';

import photoReducerSlice from './photoReducerSlice';

const store = configureStore({
    reducer: {
        photos: photoReducerSlice,
    },
});

export default store;
