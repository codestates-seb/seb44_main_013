// type 모아두는 곳
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Member, Tag, Portfolio, PortfolioContent, CATEGORY_TYPE, CategoryTags, Picture } from '@/types/portfolio';
import { Quill, TitleForm } from './form';
import { TagSlice, CategorySlice } from './reduxState';

// 다함 전용 타입
export type { Member, Tag, CATEGORY_TYPE, CategoryTags, Portfolio, PortfolioContent, Picture };
export type { Quill, TitleForm };
export type { TagSlice, CategorySlice };

//하위 chilrdern string 인터페이스 + 0705 혜진 mypage 아이템
export interface childrenProps {
  children?: React.ReactNode
  title?: React.ReactNode
  name?: React.ReactNode
  Imgurl?: React.ReactNode
}

//0705 혜진 mypage 이미지 불러오는 타입
export interface MypageItemProps extends childrenProps {
  src: string;
}

//0707 혜진 styled props 관련 type
export interface Styledprops
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  color?: string;
}


//0707 혜진 community-main:<data> commu
export interface CommuProps {
  id: number,
  title: string,
  content: string,
  view: number,
  division: string,
  name: string,
  created_at: string,
  modifiedAt: string,
  memberId: number,
  status: string,
  comments?: CommentProps[]
  pageInfo?: Pagenation
}

//0708 혜진 community-detail comments add
export interface CommentProps {
  comments_id: number;
  content: string;
  memberId: number;
  name: string;
  createdAt: string;
  modifiedAt: string;
  status: string;
}
//0714 혜진 Pagenation
export interface Pagenation {
  page: number,
  size: number,
  totalElements: number,
  totlaPages: number,
}

//0714 혜진 메인 카테고리 페이지 props
export interface MainCategory {
  data: [];
}

// export interface MainCategoryData {
//   data
// }