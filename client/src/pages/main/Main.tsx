import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { category } from '@/modules/categorySlice';
import { call } from '@/utils/apiService';

import CategoryNavBar from '@/components/navbar/CategoryNavBar';
import WebItem from '@/components/webItem/WebItem';
import { WebItemsContainer } from './Main.styled';
import AppItem from '@/components/appItem/AppItem';
import GraphicItem from '@/components/graphicItem/GraphicItem';
import PhotoItem from '@/components/photoItem/PhotoItem';
import ThreeDItem from '@/components/threeDitem/ThreeDITem';
import Search from '@/components/search/Search';

const categoryMap = {
  웹: 'web',
  앱: 'app',
  '3D/애니메이션': '3danimation',
  그래픽디자인: 'graphicdesign',
  '사진/영상': 'photo',
};

export default function Main() {
  const selectedCategory = useSelector(category);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryParam = categoryMap[selectedCategory] || 'web';
        const res = await call(
          `portfolios?category=${categoryParam}`,
          'GET',
          null
        );
        setItems(res[0].data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const renderItems = () => {
    switch (selectedCategory) {
      case '웹':
        return items.map((element, index) => (
          <WebItem item={element} key={index} />
        ));
      case '앱':
        return items.map((element, index) => (
          <AppItem item={element} key={index} />
        ));
      case '3D/애니메이션':
        return items.map((element, index) => (
          <ThreeDItem item={element} key={index} />
        ));
      case '그래픽디자인':
        return items.map((element, index) => (
          <GraphicItem item={element} key={index} />
        ));
      case '사진/영상':
        return items.map((element, index) => (
          <PhotoItem item={element} key={index} />
        ));
      default:
        return null;
    }
  };

  return (
    <>
      <Search />
      <CategoryNavBar />
      <WebItemsContainer>{renderItems()}</WebItemsContainer>
    </>
  );
}
