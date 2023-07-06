// type 모아두는 곳

import { EventHandler } from "react";

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


