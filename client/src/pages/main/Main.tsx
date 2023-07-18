// Main.tsx
import CategoryNavBar from '@/components/navbar/CategoryNavBar';
import WebItem from '@/components/webItem/WebItem';
import { WebItemsContainer } from './Main.styled';
import '../../index.css';
import AppItem from '@/components/appItem/AppItem';
import GraphicItem from '@/components/graphicItem/GraphicItem';
import PhotoItem from '@/components/photoItem/PhotoItem';
import { useSelector } from 'react-redux';
import { category } from '@/modules/categorySlice';
import ThreeDItem from '@/components/threeDitem/ThreeDITem';
import Search from '@/components/search/Search';
import { useState } from 'react';

export default function Main() {
  const [searchValue, setSearchValue] = useState('');
  const selectedCategory = useSelector(category);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const performSearch = () => {
    if (selectedCategory === '웹') {
      return <WebItem itemCount={4} searchValue={searchValue} />;
    } else if (selectedCategory === '앱') {
      return <AppItem itemCount={6} searchValue={searchValue} />;
    } else if (selectedCategory === '3D/애니메이션') {
      return <ThreeDItem itemCount={6} searchValue={searchValue} />;
    } else if (selectedCategory === '그래픽디자인') {
      return <GraphicItem itemCount={6} searchValue={searchValue} />;
    } else if (selectedCategory === '사진/영상') {
      return <PhotoItem itemCount={4} searchValue={searchValue} />;
    } else {
      return null;
    }
  };

  return (
    <>
      <Search setSearchValue={setSearchValue} 엔터치면검색={handleSearch} />
      <CategoryNavBar />
      <WebItemsContainer>{performSearch()}</WebItemsContainer>
    </>
  );
}
