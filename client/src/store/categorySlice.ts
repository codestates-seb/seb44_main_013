/* 2023-07-12 카테고리 스토어 - 김다함 */
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '.';
import { CATEGORY_TYPE, CategorySlice } from '@/types';

export const SET_CATEGORY = 'SET_CATEGORY' as const;
export const OPEN_CATEGORY = 'OPEN_CATEGORY' as const;

export const setCategory = (category: CATEGORY_TYPE) => ({ type: SET_CATEGORY, category });
export const openCategory = (isOpened: boolean) => ({ type: OPEN_CATEGORY, isOpened });

const initialState: CategorySlice = {
  category: 'web',
  isOpened: false,
  tags: [],
};

const { reducer: categoryReducer } = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: {
    SET_CATEGORY: (state, action) => {
      state.category = action.category;
    },
    OPEN_CATEGORY: (state, action) => {
      state.isOpened = action.isOpened;
    },
  },
});

export const category = (state: RootState) => state.categorySlice.category;
export const isOpened = (state: RootState) => state.categorySlice.isOpened;

export default categoryReducer;
