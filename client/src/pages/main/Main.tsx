import CategoryNavBar from '@/components/navbar/CategoryNavBar';
import WebItem from '@/components/webItem/WebItem';
import { WebItemsContainer } from './Main.styled';
// StyledBackground,
//import { WholeWrapper } from '@/commons/styles/MainLayout';
import '../../index.css';
import AppItem from '@/components/appItem/AppItem';
import GraphicItem from '@/components/graphicItem/GraphicItem';
import PhotoItem from '@/components/photoItem/PhotoItem';
import { useSelector } from 'react-redux';
import { category } from '@/modules/categorySlice';
import ThreeDItem from '@/components/threeDitem/ThreeDITem';

export default function Main() {
  const selectedCategory = useSelector(category);
  return (
    <>
      <CategoryNavBar />
      <WebItemsContainer>
        {selectedCategory === '웹' && <WebItem itemCount={4} />}
        {selectedCategory === '앱' && <AppItem itemCount={6} />}
        {selectedCategory === '3D/애니메이션' && <ThreeDItem itemCount={6} />}
        {selectedCategory === '그래픽디자인' && <GraphicItem itemCount={6} />}
        {selectedCategory === '사진/영상' && <PhotoItem itemCount={4} />}
      </WebItemsContainer>
    </>
  );
}
