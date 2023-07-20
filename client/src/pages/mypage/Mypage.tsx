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
import { DefaultImgWrapper } from '@/commons/styles/layout/Layout.styled';
import Header from '@/components/header/Header';

export default function MyPage() {
  const [user, setUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;
  const dummyArray = Array.from({ length: 10 });

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

  const addScrollListener = (id: string) => {
    const slider = document.getElementById(id);
    if (slider) {
      slider.addEventListener('wheel', horizontalScroll);
      return () => slider.removeEventListener('wheel', horizontalScroll);
    }
  };

  //scroll
  useEffect(() => {
    addScrollListener('box-wrapper1');
    addScrollListener('box-wrapper2');
  }, []);

  const horizontalScroll = (e: WheelEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLElement;
    if (target) {
      if (e.deltaY > 0) {
        target.scrollLeft += 100;
      } else {
        target.scrollLeft -= 100;
      }
    }
  };

  //pagenation
  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCommunityList = dummyArray.slice(startIndex, endIndex);

  return (
    <DefaultImgWrapper>
      <Header />
      <MainWrapper>
        {/* 프로필 부분  */}
        <MyProfileWrapper>
          <MypageProfile user={user} />
          <MypageIntroduce user={user} />
        </MyProfileWrapper>

        <MyItemsWrapper>
          <FlexColumnWrapper gap={0}>
            <BoxTitle>게시물</BoxTitle>
            <BoxWrapper id="box-wrapper1">
              {dummyArray.map((_, index) => {
                return (
                  <MypageItem
                    key={index}
                    title={'Title'}
                    name={'phy'}
                    src={''}
                  />
                );
              })}
            </BoxWrapper>
          </FlexColumnWrapper>

          {loginState ? (
            <FlexColumnWrapper gap={0}>
              <BoxTitle>북마크</BoxTitle>
              <BoxWrapper id="box-wrapper2">
                {dummyArray.map((_, index) => {
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

                  {dummyArray.slice(0, 5).map((_, i) => {
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
    </DefaultImgWrapper>
  );
}
