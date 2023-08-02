import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import Search from '@/components/search/Search';
// import { call } from '@/utils/apiService';
import CommunityItem from '@/components/communityItem/CommunityItem';
import WritingBtn from '@/commons/atoms/buttons/writing/writingBtn';
import datano from '@/assets/datano.png';

import { CommuProps } from '@/types';

import {
  ItemWrapper,
  SearchContainer,
  CommunityWrapper,
  ListsWrapper,
  StyledWritingBtn,
  NodataImage,
} from './CommunityMain.styled';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function CommunityMain() {
  const [data, setData] = useState<CommuProps[]>([]);
  const [searchParams] = useSearchParams();
  const division = searchParams.get('division');
  const page = 1;
  const size = 30;

  const state: any = useSelector((state) => state);
  const currentLoginState = state.loginSlice.isLogin;

  useEffect(() => {
    const showWholeCommu = async () => {
      await axios
        .get(`https://api.portfolly.site/boards/pages?division=${division}&page=${page}&size=${size}`)
        .then((res) => {
          console.log(res.data.data);
          setData(res.data.data);
        });
    };

    showWholeCommu();
  }, [division]);

  

  // 검색 - 07.11 효정
  const [currentSearch, setCurrentSearch] = useState('');
  const [searchs, setSearchs] = useState([] as any);

  useEffect(() => {
    setSearchs(data);
  }, [data]);

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
          {searchs.length > 0 ? (
            <ListsWrapper>
              {searchs.map((communityItem: any) => {
                return <CommunityItem key={communityItem.id} communityItem={communityItem} />;
              })}
            </ListsWrapper>
          ) : (
            <NodataImage src={datano} alt="no data" />
          )}
        </ItemWrapper>
    </CommunityWrapper>
  );
}
