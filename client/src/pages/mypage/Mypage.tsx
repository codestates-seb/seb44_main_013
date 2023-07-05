import React, {useState} from 'react';
import MypageItem from "@/components/mypageItem/MypageItem";
import { BoxTitle, BoxWrapper, MainWrapper, MyItemsWrapper } from "./MyPage.styled";
import { FlexColumnWrapper } from '@/commons/styles/Containers.styled';


export default function MyPage () {
    const [ isUser, setIsUser ] = useState(true);

    return(
        <MainWrapper>
            {/* 프로필 부분  */}


            {/* {}안에 서버로부터 받아온 정보를 보내주면 됩니다. */}
            <MyItemsWrapper>

                <FlexColumnWrapper gap={0}>
                    <BoxTitle>게시물</BoxTitle>
                    <BoxWrapper>
                            {Array.from({length:10}).map((_, index) => {
                                return (
                                <MypageItem key={index} title={'Title'} name={'phy'} src={''} />
                                )
                            })}
                    </BoxWrapper>
                </FlexColumnWrapper>
                
                { isUser ? 
                (   <FlexColumnWrapper gap={0}>
                        <BoxTitle>북마크</BoxTitle>
                        <BoxWrapper>
                            {Array.from({length:10}).map((_, index) => {
                                return (
                                <MypageItem key={index} title={'Title'} name={'phy'} src={''} />
                                )
                            })}
                        </BoxWrapper>
                    </FlexColumnWrapper>
                ) 
                : null }
            </MyItemsWrapper>

        </MainWrapper>
    )
}