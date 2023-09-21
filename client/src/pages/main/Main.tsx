import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { category } from '@/store/categorySlice';

import CategoryNavBar from '@/components/navbar/CategoryNavBar';
import WebItem from '@/components/webItem/WebItem';
import { WebItemsContainer, NodataImage } from './Main.styled';
import AppItem from '@/components/appItem/AppItem';
import GraphicItem from '@/components/graphicItem/GraphicItem';
import PhotoItem from '@/components/photoItem/PhotoItem';
import ThreeDItem from '@/components/threeDitem/ThreeDITem';
import Search from '@/components/search/Search';
import datano from '@/assets/datano.png';
import axios from 'axios';
import Ranking from '@/components/ranking/Ranking';
import { Portfolio } from '@/types';

const categoryMap = {
  web: 'web',
  app: 'app',
  '3danimation': '3danimation',
  graphicdesign: 'graphicdesign',
  photo: 'photo',
};

export default function Main() {
  const selectedCategory = useSelector(category);
  const [items, setItems] = useState<Portfolio[]>([]);
  const [filteredItems, setFilteredItems] = useState<Portfolio[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const categoryParam = categoryMap[selectedCategory] || 'web';

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
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
  const [ timeUpdate, setTime ] = useState(() => {
    const currentTime = new Date(new Date().getTime());
    const hour = currentTime.getHours();
    //const minute = currentTime.getMinutes();
    const divisionPeriod = hour > 12 ? '오후' : '오전';
    const changedHour = hour > 12 ? hour - 12 : hour;
    const updatedTimeSet = `${divisionPeriod} ${changedHour}시`;
    return updatedTimeSet;
  });

  const handleTime = () => {
    const currentTime = new Date(new Date().getTime());
    const hour = currentTime.getHours();
    //const minute = currentTime.getMinutes();
    const divisionPeriod = hour > 12 ? '오후' : '오전';
    const changedHour = hour > 12 ? hour - 12 : hour;
    const updatedTimeSet = `${divisionPeriod} ${changedHour}시`;
    setTime(updatedTimeSet);
  };


  useEffect(() => {
    console.log('페이지 업데이트')
    if (searchTerm === '') {
      setSearchs(renderItems());
    }

    setSearchs(items);
  }, [items]);

  //console.log(searchs);

  return (
    <>
      <Search setSearchValue={setSearchTerm} currentSearch={searchTerm} data={items} setSearchs={setSearchs} />
      <CategoryNavBar />
      <Ranking items={searchs} key={searchs.id} timeUpdate={timeUpdate} handleTime={handleTime}/>
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
