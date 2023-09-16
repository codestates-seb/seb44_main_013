import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

import { CommuProps } from '@/types';

import Search from '@/components/search/Search';
import CommunityItem from '@/components/communityItem/CommunityItem';
import WritingBtn from '@/commons/atoms/buttons/writing/writingBtn';
import datano from '@/assets/datano.png';
import LoadingGif from '@/assets/loading.gif';
import {
  ItemWrapper,
  SearchContainer,
  CommunityWrapper,
  ListsWrapper,
  StyledWritingBtn,
  NodataImage,
  FilterText,
  FilterWrapper,
} from './CommunityMain.styled';

export default function CommunityMain() {
  const [data, setData] = useState<CommuProps[]>([]);
  const [searchParams] = useSearchParams();
  const division = searchParams.get('division');
  const [page, setPage] = useState(1);
  const size = 8;
  
  const currentLoginState = useSelector((state: RootState) => state.loginSlice.isLogin);

  console.log(division);
  console.log(page);

  // division 바뀌면 Page 초기화
  useEffect(() => {
    const showWholeCommu = async () => {
      await axios
        .get(`https://api.portfolly.site/boards/pages?division=${division}&page=1&size=${size}`)
        .then((res) => {
          console.log(res.data.data);
          setData(res.data.data);
        });
    };
    
    showWholeCommu();
  }, [division]);

  

  // 검색 - 07.11 효정
  const [currentSearch, setCurrentSearch] = useState('');
  const [searchs, setSearchs] = useState<CommuProps[]>([]);

  useEffect(() => {
    setSearchs(data);
  }, [data]);

  // 무한스크롤 - 효정
  // 뷰포트 인식시키기
  // 뷰포트가 타겟 인식하면 다음 페이지(이전 페이지 + 1) get 요청으로 불러와서 렌더링하기
  // 페이지가 1일 때, 페이지가 2이상일 때
  // 해당 페이지의 데이터가 8개면 다음 페이지 가져오기
  // 해당 페이지의 데이터가 8개 미만이면 거기서 작동 종료
  const target = useRef<HTMLDivElement | null>(null);
  const [isEightUnder, setIsEightUnder] = useState(false); // 이전 데이터가 8개 미만인지 상태
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPage(1);
    setIsEightUnder(false);
  }, [division]);

  const [delay, setDelay] = useState(false);
  useEffect(() => {
    if(isEightUnder){
      return;
    }
    setTimeout(() => {setDelay(true)}, 1000);

    const showPageCommu = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://api.portfolly.site/boards/pages?division=${division}&page=${page}&size=${size}`);
        const currentData = response.data.data;
        console.log(currentData);
        setData([...data, ...currentData]);
        setIsLoading(false);
        setDelay(false);
        if (currentData.length < 8) {
          setIsEightUnder(true);
          return;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if(page > 1 && delay){
      showPageCommu();
    }
  }, [page]);

  // 페이지 바뀌면 실행시켜~ 페이지는 콜백함수로 바꿀거야~

  
  // 초기렌더링에 관측 못하는 거 이부분 의존성 배열이 [] 라서 그런듯
  // -> ㄴㄴ 초기 렌더링에 초기화 하는게 맞고
  // 저장하고 되는건 target이 이미 렌더링이 되어 있어서 인데
  // 그럼 초기 렌더링에 target이 잘 렌더링되고 그 후에 관측하는지 순서 파악이 필요해보임
  // -> 초기렌더링에 target이 Null 로 뜨는 거 확인
  
  const options = {
    root: null,
    threshold: 1.0,
  };
  
  // 지금 뷰포트에 들어왔는지 아닌지 분간하는 state 만들어보자
  const callback = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    console.log(target.isIntersecting);
    if(target.isIntersecting){
      console.log('여기 보는 중: ', target.target);
      setPage((prev) => prev + 1);
    }
  };
  
  const observer = new IntersectionObserver(callback, options);
    
  useEffect(() => {
    if(target.current){
      observer.observe(target.current);
    }
  }, [target.current]);

  // target.current가 잡힐 때 렌더링 되도록 의존성 배열 설정

  // 콜백 함수에는 뷰포트에 타겟이 닿으면 페이지만 증가시키는 함수 넣기
  // 콜백 함수 위에 UseEffect로 page 변경이 감지되면 실행시키는 함수
  // 그 함수안에는 바뀐 페이지로 get 요청 보내오고
  // 받은 데이터 개수가 8개 미만이면 IsEightUnder 상태 바꾸기
  // 다음 페이지 요청이 와도 isEightUnder 가 true 면 바로 리턴 때리기

  //최신순, 조회순 필터링
  const handleFilter = (filter: string) => {
    if (filter === 'recent') {
      setSearchs(data);
    }
    if (filter === 'view') {
      const filteredDatas = [...data].sort((acc: CommuProps, cur: CommuProps) => cur.view - acc.view);
      setSearchs(filteredDatas);
    }
  };
  
  return (
    <CommunityWrapper>
      <SearchContainer>
        <Search
          setSearchValue={setCurrentSearch}
          currentSearch={currentSearch}
          data={data}
          setSearchs={setSearchs}
        />
      </SearchContainer>
        <ItemWrapper>
          {currentLoginState ? (
            <Link to="/boards/edit">
              <StyledWritingBtn>
                <WritingBtn />
              </StyledWritingBtn>
            </Link>
          ) : ''}

        <FilterWrapper>
          <FilterText onClick={() => handleFilter('recent')}>최신순</FilterText>
          <FilterText onClick={() => handleFilter('view')}>조회순</FilterText>
        </FilterWrapper>

          {searchs.length > 0 ? (
            <>
              <ListsWrapper>
                {searchs.map((communityItem: CommuProps) => {
                  return <CommunityItem key={communityItem.id} communityItem={communityItem} />;
                })}
              </ListsWrapper>

                <div ref={target}></div>
                {isLoading ? <img src={LoadingGif} alt='loading' /> : ''};
            </>
          ) : (
            <NodataImage src={datano} alt="no data" />
          )}
        </ItemWrapper>
    </CommunityWrapper>
  );
}
