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
import datano from '@/assets/datano.png';
import AlertModal from '@/components/modal/AlertModal';
import axios from 'axios';

const categoryMap = {
  web: 'web',
  app: 'app',
  '3danimation': '3danimation',
  graphicdesign: 'graphicdesign',
  photo: 'photo',
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

  const categoryParam = categoryMap[selectedCategory] || 'web';

  useEffect(() => {
    window.scrollTo(0, 0);
    setClose(true);
    const fetchData = async () => {
      try {
        // const res = await call(`/portfolios?category=${categoryParam}&page=1&size=5`, 'GET', null);
        // console.log(res);
        // setItems(res.data);
        // setFilteredItems(res.data);

        await axios.get(`/portfolios?category=${categoryParam}&page=1&size=5`).then((res) => {
          console.log(res);
          setItems(res.data);
          setFilteredItems(res.data);
        });
      } catch (error) {
        console.error('데이터를 가져올 수 없습니다', error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const renderItems = () => {
    switch (selectedCategory) {
      case 'web':
        return filteredItems.map((element, index) => <WebItem item={element} key={index} />);
      case 'app':
        return filteredItems.map((element, index) => <AppItem item={element} key={index} />);
      case '3danimation':
        return filteredItems.map((element, index) => <ThreeDItem item={element} key={index} />);
      case 'graphicdesign':
        return filteredItems.map((element, index) => <GraphicItem item={element} key={index} />);
      case 'photo':
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

  const [close, setClose] = useState(false);
  const handledown = () => {
    setClose(!close);
  };

  return (
    <>
      {close === true ? (
        <AlertModal
          onCancel={handledown}
          onConfirm={handledown}
          type={'etc'}
          title={'Sorry,'}
          content={'현재 로그인 오류로 데이터가 없습니다.'}
          clicked={'닫기'}
        />
      ) : null}
      <Search setSearchValue={setSearchTerm} currentSearch={searchTerm} data={items} setSearchs={setSearchs} />
      <CategoryNavBar />
      <WebItemsContainer>
        {searchs.length > 0 ? (
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
          })
        ) : (
          <NodataImage src={datano} alt="no data" />
        )}
      </WebItemsContainer>
    </>
  );
}
