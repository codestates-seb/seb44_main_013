import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './CategorySlice';

export const store = configureStore({
  reducer: {
    categorySlice: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;