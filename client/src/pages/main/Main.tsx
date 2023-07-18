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

type Item = {
  data: {
    title: string;
    membername: string;
  };
};

export default function Main() {
  const selectedCategory = useSelector(category);
  const [items, setItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

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
        setFilteredItems(res[0].data);
      } catch (error) {
        console.error('데이터를 가져올 수 없습니다', error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredItems(items);
    } else {
      const results = items.filter(
        (item) =>
          item.data.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.data.membername.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(results);
    }
  }, [searchTerm, items]);

  const renderItems = () => {
    switch (selectedCategory) {
      case '웹':
        return filteredItems.map((element, index) => (
          <WebItem item={element} key={index} />
        ));
      case '앱':
        return filteredItems.map((element, index) => (
          <AppItem item={element} key={index} />
        ));
      case '3D/애니메이션':
        return filteredItems.map((element, index) => (
          <ThreeDItem item={element} key={index} />
        ));
      case '그래픽디자인':
        return filteredItems.map((element, index) => (
          <GraphicItem item={element} key={index} />
        ));
      case '사진/영상':
        return filteredItems.map((element, index) => (
          <PhotoItem item={element} key={index} />
        ));
      default:
        return null;
    }
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (searchTerm === '') {
        setFilteredItems(items);
      } else {
        const results = items.filter(
          (item) =>
            item.data.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.data.membername
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
        );
        setFilteredItems(results);
      }
    }
  };

  return (
    <>
      <Search setSearchValue={handleSearch} 엔터치면검색={handleKeyPress} />
      <CategoryNavBar />
      <WebItemsContainer>{renderItems()}</WebItemsContainer>
    </>
  );
}
