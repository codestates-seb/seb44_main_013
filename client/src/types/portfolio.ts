/* 2023-07-12 포트폴리오 요청 데이터 관련 타입 모음 - 김다함 */
export type CATEGORY_TYPE = "web" | "app" | "3danimation" | "graphicdesign" | "photo";

export interface Member {
  id: number,
  name: string,
  email?: string,
  member_role?: string,
  location?: string,
  job?: string,
  career?: string,
  award?: string,
  skill?: string,
  memberStatus?: string,
  imageUrl: string,
}

export interface Tag {
  id: number;
  name: string;
  isSelected: boolean;
}

export interface Category {
  id: number;
  name: CATEGORY_TYPE;
}

export type CategoryTags = {
  [key in CATEGORY_TYPE]: {
    tags: Array<Tag>;
  };
};

export type CategoryMapper = {
  [key: string]: CATEGORY_TYPE;
}

export interface Portfolio {
  id: number;
  title: string;
  content: string;
  explains: string;
  view: number;
  modifiedAt: string;
  createdAt: string;
  category: Category;
  member: Member;
  portfolioTags: Array<Tag>;
  countLikes: number;
  marked: boolean;
  liked: boolean;
  writer: boolean;
}

export interface PortfolioContent {
  id?: string | null;
  title: string;
  content: string;
  category: CATEGORY_TYPE;
  tags: Array<Tag>;
  explains: string;
  createdAt?: string;
}

export interface Picture {
  portfolioId?: number;
  fileName: string;
}