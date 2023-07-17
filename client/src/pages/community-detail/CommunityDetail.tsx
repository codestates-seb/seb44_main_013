import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { call } from '@/utils/ApiService';

import UserProfile from '@/commons/molecules/UserProfile';
import DetailContents from '@/components/detailContents/DetailContents';
import {
  CmDContainer,
  CommentContainer,
  MainContainer,
  PageWrapper,
} from './CommunityDetail.styled';
import Loading from '../404/Loading';
import CommentBox from '@/components/CommentBox';
import { CommuProps } from '@/types';

export default function CommunityDetail( {handleClick}:any ) {
  const [ memberData, setMemberData ] = useState<CommuProps>();
  const { board_id } = useParams();

  useEffect(()=> {
    const axiosMember = async () => {
      return call(`/boards/${board_id}`, 'GET', null)
      .then((res) => {
        setMemberData(res[0]);
      })
      .catch((err) => console.log('커뮤니티 상세 페이지 예시' + err)); 
    };

    axiosMember();
  }, [board_id]);

  return (
    <PageWrapper >
      { memberData !== undefined ? 
      ( <>
          <UserProfile type={'blackboard'} 
            user={{ member_id: memberData.member_id, 
                    name: memberData.name, 
                    picture: 'https://picsum.photos/200/300' 
                  }} 
          />
          <MainContainer onClick={handleClick}>
            <CmDContainer>
              <DetailContents data={memberData}/>
            </CmDContainer>
            <CommentContainer>
              <CommentBox comment={memberData.comment}/>
            </CommentContainer>
          </MainContainer>
        </>
      ) : <><Loading/></>}
    </PageWrapper>
  );
}
