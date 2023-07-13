/* 2023-07-12 요청 데이터 타입 모음 - 김다함 */
enum CATEGORY {
  "웹",
  "앱",
  "3D/애니메이션",
  "디자인/일러스트",
  "사진/영상",
}

type CATEGORY_TYPE = keyof typeof CATEGORY;

export interface Member {
  memberId: number;
  name: string;
  picture: string;
}

export interface Tag {
  tagId?: number;
  name: string;
}

export interface Category {
  id: number;
  name: CATEGORY_TYPE;
  tags: Array<Tag>;
}

export type CategoryTags = {
  [key in CATEGORY_TYPE]: {
    tags: Array<Tag>;
  };
};

export interface Portfolio {
  portfolioId: number;
  title: string;
  content: string;
  explains: string;
  views: number;
  modifiedAt: string;
  createdAt: string;
  category: string;
  member: Member;
  tags: Array<Tag>;
  likes: number;
  isLiked: boolean;
  isMarked: boolean;
}

export interface PortfolioContent {
  title: string;
  content: string;
  category: string;
  tags: Array<Tag>;
  explains: string;
}