import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import Search from '@/components/search/Search';
import CommunityItem from '@/components/communityItem/CommunityItem';
import WritingBtn from '@/commons/atoms/buttons/writing/writingBtn';

import { CommuProps } from '@/types';

import {
  ItemWrapper,
  SearchContainer,
  CommunityWrapper,
  ListsWrapper,
  StyledWritingBtn,
} from './CommunityMain.styled';
import axios from 'axios';

export default function CommunityMain() {
  const [data, setData] = useState<CommuProps[]>([]);
  const [searchParams] = useSearchParams();
  const division = searchParams.get('division');

  useEffect(() => {
    const axiosCommu = async () => {
    //   return call(`/api/boards?division=${division}`, 'GET', {
    //     params: { division: division },
    //   })
    //     .then((res) => {
    //       setData(res.data);
    //     })
    //     .catch((err) => console.log('게시판 목록 조회 에러입니다. ' + err));
    // };

    const response = await axios.get(`/api/boards?division=${division}`)
      try{
        setData(response.data);
      }catch (error) {
        console.log('게시판 목록 조회 에러입니다. ' + error);
      }
    } 
    axiosCommu();
  }, [division]);

  // console.log(data);
  // 무한스크롤

  // 1페이지에서 8개를 받아온다 get
  // 화면에 미리 뿌려둔다(화면 렌더링과 동시에)
  // 다음 타겟에 해당하는게 뷰포트에 들어오면
  // 2페이지 8개를 get 해서 받아온다
  // page 상태관리 callback 함수 실행마다 page += 1
  // 그다음에 로딩 살짝 주고(여긴 선택)
  // 화면에 렌더링한다

  // const [page, setPage] = useState(1);
  // const [hasMoreData, setHasMoreData] = useState(true);
  // console.log(data);
  
  
  // useEffect(async() => {
  //   const res = await axios.get(`/api/boards/pages?division=${division}&page=1&size=4`)

  // }, [])
  
  // intersection observer callback 으로 쓸 함수
  // const getNewCommunity = async () => {
  //   if (hasMoreData) {
  //     console.log(`/api/boards/pages?division=${division}&page=${page}&size=8`);
  //     const res = await axios.get(`/api/boards/pages?division=${division}&page=${page}&size=8`);
  //     const response = res.data.data;
  //     console.log(response);
  //     try {
  //       if (response.length === 0) {
  //         setHasMoreData(false);
  //       } else{
  //         setData(data.concat(response));
  //         setPage((prePage) => prePage + 1); // 페이지 값을 업데이트
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  
  // const pageEnd = useRef<HTMLImageElement | null>(null);

  // const options = {
  //   root: null,
  //   threshold: 1,
  // }

  // const observer = new IntersectionObserver((entries) => {
  //   // 보이는 화면의 끝에 다다르면
  //   if (entries[0].isIntersecting) {
  //     getNewCommunity();
  //   }
  // }, options);
  
  // useEffect(() => {
  //   if (pageEnd.current) {
  //     observer.observe(pageEnd.current);
  //   }

  //   if(pageEnd.current && !hasMoreData) {
  //     observer.unobserve(pageEnd.current);
  //   }
  // }, []);
  // console.log(data);
  // console.log(pageEnd);
  // console.log(hasMoreData);

  // 검색 - 07.11 효정
  const [currentSearch, setCurrentSearch] = useState('');
  const [searchs, setSearchs] = useState([] as any);

  useEffect(() => {
    setSearchs(data);
  }, [data]);

  console.log(data);
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
        <Link to="/boards/edit">
          <StyledWritingBtn>
            <WritingBtn />
          </StyledWritingBtn>
        </Link>
        <ListsWrapper>
          {searchs.map((communityItem: any) => {
            return (
              <CommunityItem
                key={communityItem.id}
                communityItem={communityItem}
              />
            );
          })}
        </ListsWrapper>
        {/* <div ref={pageEnd} /> */}
      </ItemWrapper>
    </CommunityWrapper>
  );
}
