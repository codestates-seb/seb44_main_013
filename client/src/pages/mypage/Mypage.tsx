import {useState} from 'react';
import MypageItem from "@/components/mypageItem/MypageItem";
import { BoxTitle, BoxWrapper, MainWrapper, MyItemsWrapper, MyProfileWrapper } from "./MyPage.styled";
import { FlexColumnWrapper } from '@/commons/styles/Containers.styled';
import MypageProfile from '@/components/mypageProfile/MypageProfile';
import MypageIntroduce from '@/components/mypageIntroduce/MypageIntroduce';
import CommunityList from '@/components/mypage-community/CommunityList';
import { Pagenation } from '@/components/pagenation/pagenation';
import { PagenationWrapper } from '@/components/pagenation/Pagenation.styled';


export default function MyPage () {
    const [ isUser, setIsUser ] = useState(true);

    return(
        <MainWrapper>
            
            {/* 프로필 부분  */}
            <MyProfileWrapper>
                <MypageProfile/>
                <MypageIntroduce/>
            </MyProfileWrapper>

            <MyItemsWrapper>
                {/* {}안에 서버로부터 받아온 정보를 보내주면 됩니다. */}
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
                (   

                    <FlexColumnWrapper gap={0}>
                        <BoxTitle>북마크</BoxTitle>
                        <BoxWrapper>
                            {Array.from({length:10}).map((_, index) => {
                                return (
                                <MypageItem key={index} title={'Title'} name={'phy'} src={''} />
                                )
                            })}
                        </BoxWrapper>

                        {/* 게시판 목록 부분  */}

                        <BoxTitle>게시판</BoxTitle>
                        <BoxWrapper isRow="column">
                            {Array.from({length:5}).map((_, index) => {
                                return(
                                    <CommunityList key={index}/>
                                )
                            })}

                            <PagenationWrapper>
                                <Pagenation>&lt;</Pagenation>

                                {Array.from({length: 5}).map((e, i) => {
                                    if(i === 0){
                                        return(
                                            <Pagenation>{i+1}</Pagenation>
                                        )
                                    }
                                    return(
                                        <Pagenation>{(i+length)+1}</Pagenation>
                                    )

                                })}
                                
                                <Pagenation> &gt;</Pagenation>
                            </PagenationWrapper>

                        </BoxWrapper>
                    </FlexColumnWrapper>
                ) 
                : null }
            </MyItemsWrapper>

        </MainWrapper>
    )
}