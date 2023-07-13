import { Tag } from '@/types/portfolio';

/* 2023-07-12 리덕스 State Type - 김다함 */
export interface CategorySlice {
  category: '웹' | '앱' | '3D/애니메이션' | '디자인/일러스트' | '사진/영상';
  isOpened: boolean;
  tags: Array<Tag>;
}

export interface TagSlice {
  isSelected: boolean;
  selectedTags: Array<Tag>;
}