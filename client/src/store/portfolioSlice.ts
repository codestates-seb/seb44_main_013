/* 2023-07-12 태그 스토어 - 김다함 */
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/store/index';
import { INITIAL_PORTFOLIO } from '@/types/initials';
import { CATEGORY_TYPE, PortfolioContent, PortfolioSlice, Tag } from '@/types';

export const SET_PORTFOLIO = 'SET_PORTFOLIO' as const;
export const SET_TITLE = 'SET_TITLE' as const;
export const SET_HTMLCONTENT = 'SET_HTMLCONTENT' as const;
export const SET_CATEGORY = 'SET_CATEGORY' as const;
export const SET_TAG = 'SET_TAG' as const;
export const SET_EXPLAIN = 'SET_EXPLAIN' as const;
export const INITIALIZE_TAG = 'INITIALIZE_TAG' as const;

export const setPortfolio = (portfolio: PortfolioContent) => ({ type: SET_PORTFOLIO, portfolio });
export const setTitle = (title: string) => ({ type: SET_TITLE, title });
export const setHtmlContent = (content: string) => ({ type: SET_HTMLCONTENT, content });
export const setCategory = (category: CATEGORY_TYPE) => ({ type: SET_CATEGORY, category });
export const setTag = (tag: Tag) => ({ type: SET_TAG, tag });
export const setExplain = (explain: string) => ({ type: SET_EXPLAIN, explain });
export const initializeTag = () => ({ type: INITIALIZE_TAG });

const initialState: PortfolioSlice = {
  portfolio: INITIAL_PORTFOLIO,
}

const { reducer: portfolioReducer } = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {},
  extraReducers: {
    SET_PORTFOLIO: (state, action) => {
      state.portfolio = { ...state.portfolio, ...action.portfolio }
    },
    SET_TITLE: (state, action) => {
      state.portfolio.title = action.title;
    },
    SET_HTMLCONTENT: (state, action) => {
      state.portfolio.content = action.content;
    },
    SET_CATEGORY: (state, action) => {
      state.portfolio.category = action.category;
    },
    SET_TAG: (state, action) => {
      if (action.tag.isSelected) state.portfolio.tags = [...state.portfolio.tags, action.tag];
      else state.portfolio.tags = state.portfolio.tags.filter((tag: Tag) => tag.name !== action.tag.name);
    },
    SET_EXPLAIN: (state, action) => {
      state.portfolio.explain = action.explain;
    },
    INITIALIZE_TAG: (state) => {
      state.portfolio.tags = [];
    },
  },
});

export const portfolio = (state: RootState) => state.portfolioSlice.portfolio;

export default portfolioReducer;