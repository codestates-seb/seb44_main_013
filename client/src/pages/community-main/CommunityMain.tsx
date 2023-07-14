import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import Search from '@/components/search/Search';
import { call } from '@/utils/apiService';
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

export default function CommunityMain() {
  const [ data, setDatas ] = useState<CommuProps[]>([])
  const [ searchParams, setSearchParams ] = useSearchParams(); 
  const division = searchParams.get('division')

  useEffect(() => {
    const axiosCommu = async () => {
      return call(`/boards?division=${division}`, 'GET', {params: {division: division}})
        .then((res) => {
          setDatas(res);
        })
        .catch((err) => console.log('게시판 목록 조회 에러입니다. ' + err));
    }

    axiosCommu();
  }, [division]);


  // 검색 - 07.11 효정
  const [currentSearch, setCurrentSearch] = useState('');
  const [searchs, setSearchs] = useState([] as any);
  // const [isEntered, setIsEntered] = useState(false);

  useEffect(() => {
    setSearchs(data);
  }, [data]);

  // const 기존데이터랑다르냐 = (data: any[]) => {
  useEffect(() => {
    const lowerCasified = data.map((element) => {
      return {
        ...element,
        title: element.title.toLocaleLowerCase(),
        content: element.content.toLocaleLowerCase(),
        name: element.name.toLocaleLowerCase(),
      }
    })
    const isExistTitle = lowerCasified.filter((element: any) => element.includes(currentSearch.toLocaleLowerCase()));
    // const isExistContent = lowerCasified.includes(currentSearch.toLocaleLowerCase());
    // console.log(isExistTitle);
  }, [])
  // } 
  const 엔터치면검색 = (event: any) => {
    event.preventDefault();
    if (currentSearch === '') {
      setSearchs(data);
    } else {
      setSearchs(data.filter((element: any) => {
        return element.title.toLocaleLowerCase().includes(currentSearch.toLocaleLowerCase()) ||
          element.content.toLocaleLowerCase().includes(currentSearch.toLocaleLowerCase()) ||
          element.name.toLocaleLowerCase().includes(currentSearch.toLocaleLowerCase())
      }));
    }
  }

  return (
    <CommunityWrapper>
      <SearchContainer>
        <Search setSearchValue={setCurrentSearch} 엔터치면검색={엔터치면검색} />
      </SearchContainer>

      <ItemWrapper>
        <Link to="/boards/edit">
          <StyledWritingBtn>
            <WritingBtn />
          </StyledWritingBtn>
        </Link>
        <ListsWrapper>
          {
            searchs.map((communityItem: any) => {
              return (
                <CommunityItem key={communityItem.id} communityItem={communityItem} />
              )
            })
          }
        </ListsWrapper>
      </ItemWrapper>
    </CommunityWrapper>
  );
}
