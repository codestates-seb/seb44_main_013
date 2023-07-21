import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import Search from '@/components/search/Search';
import { call } from '@/utils/apiService';
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

export default function CommunityMain() {
  const [data, setDatas] = useState<CommuProps[]>([]);
  const [searchParams] = useSearchParams();
  const division = searchParams.get('division');

  useEffect(() => {
    const showWholeCommu = async () => {
      return call(`/api/boards?division=${division}`, 'GET', {
        params: { division: division },
      })
        .then((res) => {
          setDatas(res);
        })
        .catch((err) => console.log('게시판 목록 조회 에러입니다. ' + err));
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

      
          {
            searchs > 0 ?
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
            </ItemWrapper> :
            <NodataImage src={datano} alt='no data' />
          }
      
    </CommunityWrapper>
  );
}