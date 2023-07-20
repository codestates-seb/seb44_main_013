import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '@/store/categorySlice';
import loginReducer from '@/store/loginSlice';
import portfolioReducer from '@/store/portfolioSlice';

export const store = configureStore({
  reducer: {
    categorySlice: categoryReducer,
    loginSlice: loginReducer,
    portfolioSlice: portfolioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;