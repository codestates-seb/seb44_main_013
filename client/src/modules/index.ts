import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './CategorySlice';
import tagReducer from './TagSlice';

export const store = configureStore({
  reducer: {
    categorySlice: categoryReducer,
    tagSlice: tagReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;