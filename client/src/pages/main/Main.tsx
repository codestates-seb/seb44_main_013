import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { category } from '@/modules/categorySlice';
import { call } from '@/utils/apiService';

import CategoryNavBar from '@/components/navbar/CategoryNavBar';
import WebItem from '@/components/webItem/WebItem';
import { WebItemsContainer } from './Main.styled';
// StyledBackground,
//import { WholeWrapper } from '@/commons/styles/MainLayout';
import '../../index.css';
import AppItem from '@/components/appItem/AppItem';
import GraphicItem from '@/components/graphicItem/GraphicItem';
import PhotoItem from '@/components/photoItem/PhotoItem';
import ThreeDItem from '@/components/threeDitem/ThreeDITem';


export default function Main() {
  const selectedCategory = useSelector(category);
  const [ items, setItems ] = useState([]);

  useEffect(() => {
    const getCategoryDatas = async () => {
      
      if(selectedCategory === '웹'){
        return call(`portfolios?category=web`, 'GET', null)
        .then((res) => setItems(res[0].data));
      }
      if(selectedCategory === '앱'){
        return  call(`portfolios?category=app`, 'GET', null)
        .then((res) => setItems(res[0].data));
      }
      if(selectedCategory === '3D/애니메이션'){
        return  call(`portfolios?category=3danimation`, 'GET', null)
        .then((res) => setItems(res[0].data));
      }
      if(selectedCategory === '그래픽디자인'){
        return  call(`portfolios?category=graphicdesign`, 'GET', null)
        .then((res) => setItems(res[0].data));
      }
      if(selectedCategory === '사진/영상'){
        return  call(`portfolios?category=photo`, 'GET', null)
        .then((res) => setItems(res[0].data));
      }

      return await call(`portfolios?category=web`, 'GET', null)
        .then((res) => setItems(res[0].data));
    };

    getCategoryDatas();
  }, [selectedCategory])

 

  return (
    <>
      <CategoryNavBar />
      <WebItemsContainer>
        {items.map((element, index) => {
          if(selectedCategory === '웹'){return <WebItem item={element} key={index}/>}
          if(selectedCategory === '앱'){return <AppItem item={element} key={index}/>}
          if(selectedCategory === '3D/애니메이션'){return <ThreeDItem item={element} key={index}/>}
          if(selectedCategory === '그래픽디자인'){return <GraphicItem item={element} key={index}/>}
          if(selectedCategory === '사진/영상'){return <PhotoItem item={element} key={index}/>}

        })}
      </WebItemsContainer>
    </>
  );
}
