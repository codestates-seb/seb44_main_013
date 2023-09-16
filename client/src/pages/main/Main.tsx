import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { category } from '@/store/categorySlice';
// import { call } from '@/utils/apiService';

import CategoryNavBar from '@/components/navbar/CategoryNavBar';
import WebItem from '@/components/webItem/WebItem';
import { WebItemsContainer, NodataImage, BigTitle  } from './Main.styled';
import AppItem from '@/components/appItem/AppItem';
import GraphicItem from '@/components/graphicItem/GraphicItem';
import PhotoItem from '@/components/photoItem/PhotoItem';
import ThreeDItem from '@/components/threeDitem/ThreeDITem';
import Search from '@/components/search/Search';
import datano from '@/assets/datano.png';
import axios from 'axios';
import Ranking from '@/components/ranking/Ranking';

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
    const fetchData = async () => {
      try {
        // const res = await call(`/portfolios?category=${categoryParam}&page=1&size=5`, 'GET', null);
        // console.log(res);
        // setItems(res.data);
        // setFilteredItems(res.data);

        await axios.get(`https://api.portfolly.site/portfolios?category=${categoryParam}&page=1&size=6`).then((res) => {
          console.log(res.data.data);
          setItems(res.data.data);
          setFilteredItems(res.data.data);
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
  const [ timeUpdate, setTime ] = useState(`...시`);

  useEffect(() => {
    console.log('페이지 업데이트')
    if (searchTerm === '') {
      setSearchs(renderItems());
    }

    setSearchs(items);
  }, [items, timeUpdate]);

  console.log(searchs);

  const handleTime = () => {
    const currentTime = new Date(new Date().getTime());
    const hour = currentTime.getHours();
    const divisionPeriod = hour > 12 ? '오후' : '오전';
    const changedHour = hour > 12 ? hour - 12 : hour;
    const updatedTimeSet = `${divisionPeriod} ${changedHour}시`;
    setTime(updatedTimeSet)

    console.log('업데이트 : ', updatedTimeSet);
  }

  const intervalTime = () => {
    //6시간 마다 업데이트 
    setInterval(handleTime, 21600000);
    console.log('intervalTime 함수가 실행됩니다.')
  }

  intervalTime();


  return (
    <>
      <Search setSearchValue={setSearchTerm} currentSearch={searchTerm} data={items} setSearchs={setSearchs} />
      <CategoryNavBar />
      <BigTitle>{`현재 인기 작품 순위 [ ${timeUpdate} 기준]`}</BigTitle>
      <Ranking items={searchs} key={searchs.id} />
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
