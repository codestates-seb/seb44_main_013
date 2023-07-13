import { useEffect, useState } from 'react';

import { User } from '@/mocks/data';
import MypageProfile from '@/components/mypageProfile/MypageProfile';
import MypageIntroduce from '@/components/mypageIntroduce/MypageIntroduce';
import CommunityList from '@/components/mypage-community/CommunityList';
import { Pagenation } from '@/components/pagenation/Pagenation';
import MypageItem from '@/components/mypageItem/MypageItem';

import { FlexColumnWrapper } from '@/commons/styles/Containers.styled';
import { PagenationWrapper } from '@/components/pagenation/Pagenation.styled';
import {
  BoxTitle,
  BoxWrapper,
  MainWrapper,
  MyItemsWrapper,
  MyProfileWrapper,
} from './MyPage.styled';
import axios from 'axios';

export default function MyPage() {
  const isUser = false;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios
      .get('/members')
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <MainWrapper>
      {/* 프로필 부분  */}
      <MyProfileWrapper>
        <MypageProfile user={user} />
        <MypageIntroduce user={user} />
      </MyProfileWrapper>

      <MyItemsWrapper>
        <FlexColumnWrapper gap={0}>
          <BoxTitle>게시물</BoxTitle>
          <BoxWrapper>
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <MypageItem key={index} title={'Title'} name={'phy'} src={''} />
              );
            })}
          </BoxWrapper>
        </FlexColumnWrapper>

        {isUser ? (
          <FlexColumnWrapper gap={0}>
            <BoxTitle>북마크</BoxTitle>
            <BoxWrapper>
              {Array.from({ length: 10 }).map((_, index) => {
                return (
                  <MypageItem
                    key={index}
                    title={'Title'}
                    name={'phj'}
                    src={''}
                  />
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

                {Array.from({ length: 5 }).map((_, i) => {
                  return <Pagenation>{i + 1}</Pagenation>;
                })}

                <Pagenation> &gt;</Pagenation>
              </PagenationWrapper>
            </BoxWrapper>
          </FlexColumnWrapper>
        ) : null}
      </MyItemsWrapper>
    </MainWrapper>
  );
}
