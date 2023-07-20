import { CATEGORY_TYPE, PortfolioContent, Tag } from '@/types';

/* 2023-07-12 리덕스 State Type - 김다함 */
export interface CategorySlice {
  category: CATEGORY_TYPE;
  isOpened: boolean;
  tags: Array<Tag>;
}

export interface PortfolioSlice {
  portfolio: PortfolioContent;
}