/* 2023-07-12 카테고리 스토어 - 김다함 */
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/modules/index';
import { Tag, TagSlice } from '@/types';

export const SELECT_TAG = 'SELECT_TAG' as const;

export const selectTag = (isSelected: boolean, tag: Tag) => ({ type: SELECT_TAG, isSelected, tag });

const initialState: TagSlice = {
  isSelected: false,
  selectedTags: [],
}

const { reducer: tagReducer } = createSlice({
  name: 'tag',
  initialState,
  reducers: {},
  extraReducers: {
    SELECT_TAG: (state, action) => {
      state.isSelected = action.isSelected;
      if (action.isSelected) state.selectedTags = [...state.selectedTags, action.tag]
      else state.selectedTags = state.selectedTags.filter((tag: Tag) => tag.name !== action.tag.name);
    },
  },
});

export const isSelect = (state: RootState) => state.tagSlice.isSelected;
export const tags = (state: RootState) => state.tagSlice.selectedTags;

export default tagReducer;