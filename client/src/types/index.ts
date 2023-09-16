// type 모아두는 곳
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import {
  Member,
  Tag,
  Portfolio,
  PortfolioContent,
  CATEGORY_TYPE,
  Category,
  CategoryTags,
  Picture,
  CategoryMapper,
} from '@/types/portfolio';
import { Quill, TitleFormProps } from '@/types/form';
import { CategorySlice, PortfolioSlice } from '@/types/slice';

// 다함 전용 타입
export type {
  Member,
  Tag,
  CATEGORY_TYPE,
  Category,
  CategoryTags,
  Portfolio,
  PortfolioContent,
  Picture,
  CategoryMapper,
};
export type { Quill, TitleFormProps };
export type { CategorySlice, PortfolioSlice };

//하위 chilrdern string 인터페이스 + 0705 혜진 mypage 아이템
export interface childrenProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
  name?: React.ReactNode;
  Imgurl?: React.ReactNode;
}

//0705 혜진 mypage 이미지 불러오는 타입
export interface MyPagePortfolioSlice {
  pictureUrl: string;
}

export interface MypageItemProps extends childrenProps {
  portfolio: {
    title: string;
    name: string;
    pictures: MyPagePortfolioSlice[];
    portfolioId?: number;
  };
}

//0707 혜진 styled props 관련 type
export interface Styledprops extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  color?: string;
}

//0707 혜진 community-main:<data> commu
export interface CommuProps {
  memberInfo: MemberInfoProps;
  member: any;
  id: number;
  title: string;
  content: string;
  view: number;
  division: string;
  name: string;
  created_at: string;
  modifiedAt: string;
  memberId: number;
  status: string;
  comments: CommentProps[];
  pageInfo?: Pagenation;
}

export interface MemberInfoProps {
  memberId: number;
  name: string;
  imageUrl: string | null;
}

//0708 혜진 community-detail comments add
export interface CommentProps {
  id: number;
  content: string;
  name: string;
  createdAt: string;
  modifiedAt: string;
  status: string;
  memberInfo: MemberInfoProps;
}
//0714 혜진 Pagenation
export interface Pagenation {
  page: number;
  size: number;
  totalElements: number;
  totlaPages: number;
}

//0714 혜진 메인 카테고리 페이지 props
export interface MainCategory {
  data: [];
}
