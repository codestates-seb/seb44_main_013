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
import { useSelector } from 'react-redux';
import { RootState } from '@/modules';

export default function MyPage() {
  const [user, setUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태 추가
  const itemsPerPage = 5;

  const loginState = useSelector(
    (state: RootState) => state.loginSlice.isLogin
  );

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

  //pagenation
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCommunityList = Array.from({ length: 10 }).slice(
    startIndex,
    endIndex
  );

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

        {loginState ? (
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
              {paginatedCommunityList.map((_, index) => {
                return <CommunityList key={index} />;
              })}

              <PagenationWrapper>
                <Pagenation
                  onClick={() => handlePageChange(currentPage - 1)}
                  isActive={currentPage === 1}
                >
                  &lt;
                </Pagenation>

                {Array.from({ length: 5 }).map((_, i) => {
                  const pageNumber = i + 1;
                  return (
                    <Pagenation
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      isActive={pageNumber === currentPage}
                    >
                      {pageNumber}
                    </Pagenation>
                  );
                })}

                <Pagenation
                  onClick={() => handlePageChange(currentPage + 1)}
                  isActive={currentPage === 5}
                >
                  &gt;
                </Pagenation>
              </PagenationWrapper>
            </BoxWrapper>
          </FlexColumnWrapper>
        ) : null}
      </MyItemsWrapper>
    </MainWrapper>
  );
}
