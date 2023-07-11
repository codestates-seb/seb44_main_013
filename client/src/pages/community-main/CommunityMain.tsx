import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Search from '@/components/search/Search';
import { call } from '@/utils/ApiService';
import {
  ItemWrapper,
  SearchContainer,
  CommunityWrapper,
  ListsWrapper,
  StyledWritingBtn,
} from './CommunityMain.styled';
import CommunityItem from '@/components/communityItem/CommunityItem';
import WritingBtn from '@/commons/atoms/buttons/writing/writingBtn';

import { CommuProps } from '@/types';

export default function CommunityMain() {
  const [ datas, setDatas ] = useState<CommuProps[]>([])



  useEffect(() => {
    const axiosCommu = async () => {
      return call('/boards', 'GET', null)
      .then((res) => {
        setDatas(res);
      })
      .catch((err) => console.log('게시판 목록 조회 에러입니다. ' + err));
    }

    axiosCommu();
  }, []);

  return (
    <CommunityWrapper>
      <SearchContainer>
        <Search />
      </SearchContainer>

      <ItemWrapper>
        <Link to="/boards/edit">
          <StyledWritingBtn>
          <WritingBtn />
          </StyledWritingBtn>
        </Link>
        <ListsWrapper>
          {
            datas.map((e) => {
              return(
                <CommunityItem key={e.board_id} datas={e} />
              )
            })
          }
        </ListsWrapper>
      </ItemWrapper>
    </CommunityWrapper>
  );
}
