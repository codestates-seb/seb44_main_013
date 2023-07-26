import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '@/store/categorySlice';
import loginReducer from '@/store/loginSlice';
import portfolioReducer from '@/store/portfolioSlice';
import memberReducer from '@/store/memberSlice';

export const store = configureStore({
  reducer: {
    categorySlice: categoryReducer,
    loginSlice: loginReducer,
    portfolioSlice: portfolioReducer,
    memberSlice: memberReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
