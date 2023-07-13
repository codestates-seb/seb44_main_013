/* 2023-07-12 카테고리 스토어 - 김다함 */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/modules/index';
import { tagSliceType } from '@/types';

export const SELECT_TAG = 'SELECT_TAG' as const;

export const selectTag = (isSelect: boolean, tagName: string) => ({ type: SELECT_TAG, isSelect, tagName });

const initialState: tagSliceType = {
  isSelect: false,
  selected: [],
}

const { reducer: tagReducer } = createSlice({
  name: 'tag',
  initialState,
  reducers: {},
  extraReducers: {
    SELECT_TAG: (state, action) => {
      state.isSelect = action.isSelect;
      if (action.isSelect) state.selected = [...state.selected, action.tagName]
      else state.selected = state.selected.filter((selected) => selected !== action.tagName);
    },
  },
});

export const isSelect = (state: RootState) => state.tagSlice.isSelect;
export const selectedTags = (state: RootState) => state.tagSlice.selected;

export default tagReducer;