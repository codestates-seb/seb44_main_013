// type 모아두는 곳
import { ButtonHTMLAttributes, DetailedHTMLProps, EventHandler } from "react";
import { User } from './UserInterface';

export type { User };

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
  board_id: number,
  title: string,
  content: string,
  view: number,
  division:string,
  name: string,
  created_at: string,
  modifiedAt: string,
  member_id: number,
  status:boolean,
  comment?: CommentProps[]
}

//0708 혜진 community-detail comments add
export interface CommentProps {
  comments_id: number;
  content: string;
  member_id: number;
  name: string;
  createdAt: string;
  modifiedAt: string;
}


//0710 정연 Mypage 사용자 정보 수정 
// import { worker } from "../mocks/worker";

// if (process.env.NODE_ENV === 'development') {
//   worker.start();
// }

