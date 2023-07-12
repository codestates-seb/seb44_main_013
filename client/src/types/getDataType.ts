/* 2023-07-12 요청 데이터 타입 모음 - 김다함 */
export interface UserType {
  member_id: number;
  name: string;
  picture: string;
}

export interface CategoryType {
  id: number;
  name: "웹" | "앱" | "3D/애니메이션" | "디자인/일러스트" | "사진/영상";
  tags: Array<string>;
}

export interface portfolioContentType {
  title: string;
  content: string;
  category: string;
  tags: Array<string>;
  explains: string;
}