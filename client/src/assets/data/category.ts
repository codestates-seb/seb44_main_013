import { CATEGORY_TYPE, CategoryTags } from '@/types';

export const categories: Array<CATEGORY_TYPE> = ["웹", "앱", "3D/애니메이션", "그래픽디자인", "사진/영상"];

export const categoryTags: CategoryTags = {
  "웹": {
    tags: [
      {
        tagId: 1,
        name: 'javascript',
        isSelected: false,
      },
      {
        tagId: 2,
        name: 'react',
        isSelected: false,
      },
      {
        tagId: 3,
        name: 'SSR',
        isSelected: false,
      },
      {
        tagId: 4,
        name: 'CSR',
        isSelected: false,
      },
      {
        tagId: 5,
        name: 'vue.js',
        isSelected: false,
      }
    ],
  },
  "앱": {
    tags: [
      {
        tagId: 6,
        name: 'android',
        isSelected: false,
      },
      {
        tagId: 7,
        name: 'iOS',
        isSelected: false,
      },
      {
        tagId: 8,
        name: 'react native',
        isSelected: false,
      },
      {
        tagId: 9,
        name: 'android studio',
        isSelected: false,
      },
    ],
  },
  "3D/애니메이션": {
    tags: [
      {
        tagId: 10,
        name: '음',
        isSelected: false,
      },
      {
        tagId: 11,
        name: '오',
        isSelected: false,
      },
      {
        tagId: 12,
        name: '아',
        isSelected: false,
      },
      {
        tagId: 13,
        name: '예',
        isSelected: false,
      },
    ],
  },
  "그래픽디자인": {
    tags: [
      {
        tagId: 14,
        name: '훌라',
        isSelected: false,
      },
      {
        tagId: 15,
        name: '훌라',
        isSelected: false,
      },
      {
        tagId: 16,
        name: '신나고',
        isSelected: false,
      },
      {
        tagId: 17,
        name: '즐거운',
        isSelected: false,
      },
      {
        tagId: 18,
        name: '코딩시간',
        isSelected: false,
      }
    ],
  },
  "사진/영상": {
    tags: [
      {
        tagId: 19,
        name: '사실은',
        isSelected: false,
      },
      {
        tagId: 20,
        name: '하나도',
        isSelected: false,
      },
      {
        tagId: 21,
        name: '안 신나',
        isSelected: false,
      },
      {
        tagId: 22,
        name: '목이',
        isSelected: false,
      },
      {
        tagId: 23,
        name: '거북목된다',
        isSelected: false,
      }
    ],
  }
}