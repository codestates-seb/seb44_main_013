import { useEffect, useState } from 'react';

import { User } from '@/mocks/data';
import MypageProfile from '@/components/mypageProfile/MypageProfile';
import MypageIntroduce from '@/components/mypageIntroduce/MypageIntroduce';
import CommunityList from '@/components/mypage-community/CommunityList';
import { Pagenation } from '@/components/pagenation/Pagenation';
import MypageItem from '@/components/mypageItem/MypageItem';

import { FlexColumnWrapper } from '@/commons/styles/Containers.styled';
import { PagenationWrapper } from '@/components/pagenation/Pagenation.styled';
import { BoxTitle, BoxWrapper, MainWrapper, MyItemsWrapper, MyProfileWrapper } from './MyPage.styled';
import noBookmark from '@/assets/noBookmark.png';

import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { DefaultImgWrapper } from '@/commons/styles/layout/Layout.styled';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import netaxios from '@/utils/axiosIntercept';
import { useParams } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  content: string;
}
interface Portfolio {
  id: number;
  bookmarks: any;
  title: string;
  name: string;
  pictures: { pictureUrl: string }[];
}

export default function MyPage() {
  const [user, setUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;
  const { id: memberId } = useParams<{ id: string }>();
  const [, setUserBoards] = useState<Post[]>([]);
  const [userPortfolios, setUserPortfolios] = useState<Portfolio[]>([]);
  const [bookmarkedPortfolios, setBookmarkedPortfolios] = useState<Portfolio[]>([]);

  const loginState = useSelector((state: RootState) => state.loginSlice.isLogin);

  useEffect(() => {
    netaxios
      .get(`/members/${memberId}`)
      .then((response) => {
        console.log('response data ');
        console.log(response);
        setUser(response.data);
        setUserPortfolios(response.data.portfolios);
        setBookmarkedPortfolios(response.data.bookmarks);
      })
      .catch((error) => {
        console.error(error);
      });

    netaxios
      .get(`/boards?memberId=${memberId}`)
      .then((response) => {
        setUserBoards(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [memberId, currentPage]);
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

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

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
              {userPortfolios.map((portfolio, index) => {
                const imageSrc = portfolio.pictures.length ? portfolio.pictures[0].pictureUrl : 'defaultImageUrl';

                return (
                  <MypageItem
                    key={index}
                    portfolio={{
                      title: portfolio.title,
                      name: user?.name || '',
                      pictures: [{ pictureUrl: imageSrc }],
                      portfolioId: portfolio.id,
                    }}
                  />
                );
              })}
            </BoxWrapper>
          </FlexColumnWrapper>

          {loginState ? (
            <FlexColumnWrapper gap={0}>
              <BoxTitle>북마크</BoxTitle>
              <BoxWrapper id="box-wrapper2">
                {bookmarkedPortfolios
                  .filter((portfolio) => portfolio.bookmarks.length > 0)
                  .map((portfolio, index) => {
                    const imageSrc = portfolio.pictures.length ? portfolio.pictures[0].pictureUrl : 'defaultImageUrl';

                    return (
                      <MypageItem
                        key={index}
                        portfolio={{
                          title: portfolio.title,
                          name: user?.name || '',
                          pictures: [{ pictureUrl: imageSrc }],
                        }}
                      />
                    );
                  })}
              </BoxWrapper>

              {/* 게시판 목록 부분  */}
              <BoxTitle>게시판</BoxTitle>
              <BoxWrapper isRow="column">
                {user?.boards.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((post) => (
                  <CommunityList key={post.id} title={post.title} name={user?.name} communityId={post.id} />
                ))}
                <PagenationWrapper>
                  <Pagenation
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    isActive={currentPage === 1}
                  >
                    &lt;
                  </Pagenation>

                  {Array.from(
                    {
                      length: Math.ceil((user?.boards?.length || 0) / itemsPerPage),
                    },
                    (_, i) => i + 1
                  ).map((pageNumber) => (
                    <Pagenation
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      isActive={pageNumber === currentPage}
                    >
                      {pageNumber}
                    </Pagenation>
                  ))}

                  <Pagenation
                    onClick={() =>
                      handlePageChange(Math.min(currentPage + 1, Math.ceil((user?.boards?.length || 0) / itemsPerPage)))
                    }
                    isActive={currentPage === Math.ceil((user?.boards?.length || 0) / itemsPerPage)}
                  >
                    &gt;
                  </Pagenation>
                </PagenationWrapper>
              </BoxWrapper>
            </FlexColumnWrapper>
          ) : null}
        </MyItemsWrapper>
      </MainWrapper>
      <Footer />
    </DefaultImgWrapper>
  );
}
