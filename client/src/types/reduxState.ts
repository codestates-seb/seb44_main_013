import { CATEGORY_TYPE, Tag } from '@/types';

/* 2023-07-12 리덕스 State Type - 김다함 */
export interface CategorySlice {
<<<<<<< HEAD
  category: CATEGORY_TYPE;
=======
  category: '웹' | '앱' | '3D/애니메이션' | '그래픽디자인' | '사진/영상';
>>>>>>> 7cd791688a643e57a3c9541fc37c2cf5985f16a7
  isOpened: boolean;
  tags: Array<Tag>;
}

export interface TagSlice {
  isSelected: boolean;
  selectedTags: Array<Tag>;
}