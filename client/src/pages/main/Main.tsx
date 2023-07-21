import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { category } from '@/store/categorySlice';
import { call } from '@/utils/apiService';

import CategoryNavBar from '@/components/navbar/CategoryNavBar';
import WebItem from '@/components/webItem/WebItem';
import { WebItemsContainer, NodataImage } from './Main.styled';
import AppItem from '@/components/appItem/AppItem';
import GraphicItem from '@/components/graphicItem/GraphicItem';
import PhotoItem from '@/components/photoItem/PhotoItem';
import ThreeDItem from '@/components/threeDitem/ThreeDITem';
import Search from '@/components/search/Search';
import { RootState } from '@/store';
import datano from '@/assets/datano.png';

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
  const loginState = useSelector((state: RootState) => state.loginSlice.isLogin);
  console.log(loginState);

  const categoryParam = categoryMap[selectedCategory] || 'web';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await call(`portfolios?category=${categoryParam}`, 'GET', null);
        setItems(res[0].data);
        setFilteredItems(res[0].data);
      } catch (error) {
        console.error('데이터를 가져올 수 없습니다', error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const renderItems = () => {
    switch (selectedCategory) {
      case '웹':
        return filteredItems.map((element, index) => <WebItem item={element} key={index} />);
      case '앱':
        return filteredItems.map((element, index) => <AppItem item={element} key={index} />);
      case '3D/애니메이션':
        return filteredItems.map((element, index) => <ThreeDItem item={element} key={index} />);
      case '그래픽디자인':
        return filteredItems.map((element, index) => <GraphicItem item={element} key={index} />);
      case '사진/영상':
        return filteredItems.map((element, index) => <PhotoItem item={element} key={index} />);
      default:
        return null;
    }
  };

  const [searchs, setSearchs] = useState([] as any);

  useEffect(() => {
    if (searchTerm === '') {
      setSearchs(renderItems());
    }

    setSearchs(items);
  }, [items]);

  console.log(searchs);

  return (
    <>
      <Search setSearchValue={setSearchTerm} currentSearch={searchTerm} data={items} setSearchs={setSearchs} />
      <CategoryNavBar />
      <WebItemsContainer>
        {
          searchs.length > 0 ?
          searchs.map((searchedItem: any, index: any) => {
            if (categoryParam === 'web') {
              return <WebItem item={searchedItem} key={index} />;
            }
            if (categoryParam === 'app') {
              return <AppItem item={searchedItem} key={index} />;
            }
            if (categoryParam === '3danimation') {
              return <ThreeDItem item={searchedItem} key={index} />;
            }
            if (categoryParam === 'graphicdesign') {
              return <GraphicItem item={searchedItem} key={index} />;
            }
            if (categoryParam === 'photo') {
              return <PhotoItem item={searchedItem} key={index} />;
            }
          }) :
          <NodataImage src={datano} alt='no data' />
        }
      </WebItemsContainer>
    </>
  );
}
