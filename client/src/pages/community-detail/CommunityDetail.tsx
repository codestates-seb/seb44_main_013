import Footer from '@/commons/atoms/footer/Footer';
import CHeader from '@/commons/atoms/header/CHeader';
import UserProfile from '@/commons/molecules/UserProfile';
import DetailContents from '@/components/detailContents/DetailContents';
import { CmDContainer } from './CommunityDetail.styled';
import CommentWriteBox from '@/commons/molecules/CommentWriteBox';

export default function CommunityDetail() {
  return (
    <>
      <CHeader />
      <CmDContainer>
        <UserProfile type={'board'} username={'emma'} />
        <DetailContents />
      </CmDContainer>
      <CommentWriteBox />
      <Footer />
    </>
  );
}
