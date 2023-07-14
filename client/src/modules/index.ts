import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';
import tagReducer from './tagSlice';
import loginReducer from './loginSlice';

export const store = configureStore({
  reducer: {
    categorySlice: categoryReducer,
    tagSlice: tagReducer,
    loginSlice: loginReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;