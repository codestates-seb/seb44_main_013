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
      return call('/boards/detail', 'GET', null)
      .then((res) => {
        setDatas(res);
      })
      .catch((err) => console.log('게시판 목록 조회 에러입니다. ' + err));
    }

    axiosCommu();
  }, []);

  const data = [
    {
      board_id: 1,
      title: "박효정씨는 아침 요청입니다.",
      content: "매일 아침마다 효정씨는 모두에게 아침 인사를 해줍니다. 아주 성실한 친구죠.",
      view: 208,
      division: "recruitment",
      name: "phy",
      created_at: "2023-06-21T17:34:51.3395597",
      modifiedAt: "2023-06-21T17:34:51.3395597",
      member_id: 1,
      status: true
    },
    {
      board_id: 2,
      title: "위정연씨는 칭찬 스티커를 줍니다.",
      content: "잘 하는 사람만 정연씨의 칭찬 스티커를 받을 수 있죠.",
      view: 200,
      division: "recruitment",
      name: "yjy",
      created_at: "2023-05-21T17:34:51.3395597",
      modifiedAt: "2023-05-21T17:34:51.3395597",
      member_id: 2,
      status: true
    }
  ]
  // 검색 - 07.11 효정
  const [searchValue, setSearchValue] = useState('');
  const [searchArr, setSearchArr] = useState([] as any);
  const [enterPress, setEnterPress] = useState(false);

  useEffect(() => {
    if(searchValue !== null) {
      setSearchArr(data.filter((el) => {
        return el.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        el.content.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        el.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      }));
    }else{
      setSearchArr([]);
    };

    setEnterPress(false);
    
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
