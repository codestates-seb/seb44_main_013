import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '@/modules/categorySlice';
import tagReducer from '@/modules/tagSlice';

export const store = configureStore({
  reducer: {
    categorySlice: categoryReducer,
    tagSlice: tagReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;