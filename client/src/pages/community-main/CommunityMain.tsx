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

  
  // 검색 - 07.11 효정
  
  const [searchValue, setSearchValue] = useState('');
  const [searchArr, setSearchArr] = useState([] as any);
  const [enterPress, setEnterPress] = useState(false);

  useEffect(() => {
      setSearchArr(datas);
  }, [datas]);

  useEffect(() => {
    if(searchValue !== '') {
      setSearchArr(datas.filter((el: any) => {
        return el.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        el.content.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        el.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      }));
    }else {
      setSearchArr(datas);
    };

    setEnterPress(false);
    console.log(datas);
    console.log(searchArr);
    
  }, [enterPress])

  

  return (
    <CommunityWrapper>
      <SearchContainer>
        <Search setSearchValue={setSearchValue} setEnterPress={setEnterPress} />
      </SearchContainer>

      <ItemWrapper>
        <Link to="/boards/edit">
          <StyledWritingBtn>
          <WritingBtn />
          </StyledWritingBtn>
        </Link>
        <ListsWrapper>
          {
            searchArr.map((e: any) => {
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
