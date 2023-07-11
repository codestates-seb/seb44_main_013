// type 모아두는 곳
import { ButtonHTMLAttributes, DetailedHTMLProps, EventHandler } from "react";
import { User } from './UserInterface';
import { QuillPropsType } from './QuillPropsType';

export type { User };
export type { QuillPropsType };

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

