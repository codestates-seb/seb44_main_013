/* 2023-07-12 카테고리 스토어 - 김다함 */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/modules/index';

export const SET_CATEGORY = 'SET_CATEGORY' as const;
export const OPEN_CATEGORY = 'OPEN_CATEGORY' as const;

export const setCategory = (category: string) => ({ type: SET_CATEGORY, category });
export const openCategory = (isOpen: boolean) => ({ type: OPEN_CATEGORY, isOpen });

const { reducer: categoryReducer } = createSlice({
  name: 'category',
  initialState: {
    category: '웹', // '웹', '앱', '3D/애니메이션', '디자인/일러스트', '사진/영상'
    isOpen: false,
  },
  reducers: {},
  extraReducers: {
    SET_CATEGORY: (state, action) => {
      state.category = action.category;
    },
    OPEN_CATEGORY: (state, action) => {
      state.isOpen = action.isOpen;
    },
  },
});

export const category = (state: RootState) => state.categorySlice.category;
export const isOpen = (state: RootState) => state.categorySlice.isOpen;

export default categoryReducer;