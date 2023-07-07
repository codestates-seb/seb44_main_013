import UserProfile from '@/commons/molecules/UserProfile';
import DetailContents from '@/components/detailContents/DetailContents';
import {
  CmDContainer,
  CommentContainer,
  CommentWrite,
  MainContainer,
  PageWrapper,
} from './CommunityDetail.styled';
import CommentWriteBox from '@/commons/molecules/CommentWriteBox';
import Comment from '@/commons/molecules/Comment';

export default function CommunityDetail() {
  return (
    <PageWrapper>
      <MainContainer>
        <CmDContainer>
          <UserProfile type={'board'} username={'emma'} />
          <DetailContents />
        </CmDContainer>

        <CommentContainer>
          <Comment username={'ac'} content="adfads" date="2023.07.06" />
          <CommentWrite>
            <CommentWriteBox />
          </CommentWrite>
        </CommentContainer>
      </MainContainer>
    </PageWrapper>
  );
}
