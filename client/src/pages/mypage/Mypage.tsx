import { useEffect, useState } from 'react';
import MypageItem from '@/components/mypageItem/MypageItem';
import {
  BoxTitle,
  BoxWrapper,
  MainWrapper,
  MyItemsWrapper,
  MyProfileWrapper,
} from './MyPage.styled';
import { FlexColumnWrapper } from '@/commons/styles/Containers.styled';
import MypageProfile from '@/components/mypageProfile/MypageProfile';
import MypageIntroduce from '@/components/mypageIntroduce/MypageIntroduce';
import CommunityList from '@/components/mypage-community/CommunityList';
import { Pagenation } from '@/components/pagenation/Pagenation';
import { PagenationWrapper } from '@/components/pagenation/Pagenation.styled';
import { UserData } from '@/mocks/data';

export default function MyPage() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/members');
        const data = await response.json();
        setUserData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <MainWrapper>
      {/* 프로필 부분  */}
      <MyProfileWrapper>
        <MypageProfile userData={userData} />
        <MypageIntroduce userData={userData} />
      </MyProfileWrapper>

      <MyItemsWrapper>
        <FlexColumnWrapper gap={0}>
          <BoxTitle>게시물</BoxTitle>
          <BoxWrapper>
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <MypageItem key={index} title={'Title'} name={'phj'} src={''} />
              );
            })}
          </BoxWrapper>
        </FlexColumnWrapper>

        <FlexColumnWrapper gap={0}>
          <BoxTitle>북마크</BoxTitle>
          <BoxWrapper>
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <MypageItem key={index} title={'Title'} name={'phj'} src={''} />
              );
            })}
          </BoxWrapper>

          {/* 게시판 목록 부분  */}
          <BoxTitle>게시판</BoxTitle>
          <BoxWrapper isRow="column">
            {Array.from({ length: 5 }).map((_, index) => {
              return <CommunityList key={index} />;
            })}

            <PagenationWrapper>
              <Pagenation>&lt;</Pagenation>

              {Array.from({ length: 5 }).map((e, i) => {
                return <Pagenation>{i + 1}</Pagenation>;
              })}

              <Pagenation> &gt;</Pagenation>
            </PagenationWrapper>
          </BoxWrapper>
        </FlexColumnWrapper>
      </MyItemsWrapper>
    </MainWrapper>
  );
}
