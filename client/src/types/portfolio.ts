/* 2023-07-12 포트폴리오 요청 데이터 관련 타입 모음 - 김다함 */
export type CATEGORY_TYPE = "웹" | "앱" | "3D/애니메이션" | "그래픽디자인" | "사진/영상";

export interface Member {
  memberId: number;
  name: string;
  picture: string;
}

export interface Tag {
  tagId?: number;
  name: string;
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
  category: CATEGORY_TYPE;
  member: Member;
  tags: Array<Tag>;
  likes: number;
  isLiked: boolean;
  isMarked: boolean;
  isMine: boolean;
}

export interface PortfolioContent {
  title: string;
  content?: string;
  category: CATEGORY_TYPE;
  tags: Array<Tag>;
  explains: string;
  createdAt?: string;
}

export interface Picture {
  portfolioId: number;
  filename: string;
}