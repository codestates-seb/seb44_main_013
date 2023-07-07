import UserProfile from '@/commons/molecules/UserProfile';
import DetailContents from '@/components/detailContents/DetailContents';
import {
  CmDContainer,
  CommentContainer,
  MainContainer,
  PageWrapper,
} from './CommunityDetail.styled';
import CommentBox from '@/components/CommentBox';

export default function CommunityDetail() {
  return (
    <PageWrapper>
      <UserProfile type={'blackboard'} username={'emma'} />
      <MainContainer>
        <CmDContainer>
          <DetailContents />
        </CmDContainer>
        <CommentContainer>
          <CommentBox comment='CommentType' />
        </CommentContainer>
      </MainContainer>
    </PageWrapper>
  );
}
