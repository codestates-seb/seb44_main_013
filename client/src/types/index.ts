// type 모아두는 곳
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Member, Tag, Category, Portfolio, PortfolioContent, CategoryTags } from '@/types/portfolio';
import { QuillPropsType } from './QuillPropsType';
import { TagSlice, CategorySlice } from './reduxState';

// 다함 전용 타입
export type { Member, Tag, Category, CategoryTags, Portfolio, PortfolioContent };
export type { QuillPropsType };
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
  color: string;
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
