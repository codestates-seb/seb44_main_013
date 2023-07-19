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

  const categoryParam = categoryMap[selectedCategory] || 'web';
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const categoryParam = categoryMap[selectedCategory] || 'web';
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

  // useEffect(() => {
  //   if (searchTerm === '') {
  //     setFilteredItems(items);
  //   } else {
  //     const results = items.filter(
  //       (item) =>
  //         item.data.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //         item.data.membername.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setFilteredItems(results);
  //   }
  // }, [searchTerm, items]);

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

  // const handleSearch = (value: string) => {
  //   setSearchTerm(value);
  // };

  // const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === 'Enter') {
  //     if (searchTerm === '') {
  //       setFilteredItems(items);
  //     } else {
  //       const results = items.filter(
  //         (item) =>
  //           item.data.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //           item.data.membername
  //             .toLowerCase()
  //             .includes(searchTerm.toLowerCase())
  //       );
  //       setFilteredItems(results);
  //     }
  //   }
  // };

  const [searchs, setSearchs] = useState([] as any);

  useEffect(() => {
    if(searchTerm === ''){
      setSearchs(renderItems());
    }

    setSearchs(items);
  }, [items]);

  console.log(searchs);
  
  // searchs 가 추가될 때 그때 렌더링이 되게 해야함
  // searchterm이 없을때 리렌더링X
  
  return (
    <>
      <Search
        setSearchValue={setSearchTerm}
        currentSearch={searchTerm}
        data={items}
        setSearchs={setSearchs}
      />
      <CategoryNavBar />
      <WebItemsContainer>
        {
          // searchTerm === '' ?
          // renderItems() :
          searchs.map((searchedItem: any, index: any) => {
            if(categoryParam === 'web') {
              return (<WebItem item={searchedItem} key={index} />)
            }
            if(categoryParam === 'app') {
              return (<AppItem item={searchedItem} key={index} />)
            }
            if(categoryParam === '3danimation') {
              return (<ThreeDItem item={searchedItem} key={index} />)
            }
            if(categoryParam === 'graphicdesign') {
              return (<GraphicItem item={searchedItem} key={index} />)
            }
            if(categoryParam === 'photo') {
              return (<PhotoItem item={searchedItem} key={index} />)
            }
        })}
      </WebItemsContainer>
    </>
  );
}

