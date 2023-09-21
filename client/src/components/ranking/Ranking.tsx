import { Link } from 'react-router-dom';

import { Portfolio } from '@/types';
import { ContentPart, ItemImg, RankingContainer, RankingItem, TitleContainer, TitlePart, BigTitle, RankingItemContainer } from './Ranking.styled';
import noPic from '@/assets/noPic.png';
import { useEffect } from 'react';

interface RankingItemsTypes {
  items: Portfolio[];
  timeUpdate: string;
  handleTime: () => void;
}
 
export default function Ranking({items, timeUpdate, handleTime}: RankingItemsTypes) {
  //console.log(items);
  const rankingData = items.sort((a: Portfolio, b: Portfolio) => b.view - a.view);

  useEffect(() => {
    const handleInterval = setInterval(() => {
      handleTime();
      console.log('인터벌 함수 실행합니다.', timeUpdate);
    }, 21600000);

    return () => {
      clearInterval(handleInterval);
    }
  }, [timeUpdate]);


  return (
    <RankingContainer>
      <BigTitle>{`현재 인기 작품 순위 [ ${timeUpdate} 기준]`}</BigTitle>
      <RankingItemContainer>
      {rankingData.length > 0
        ? rankingData.map((item: Portfolio) => {
          const thumbnail = item.firstImage === null ? noPic : item.firstImage;
            return (
              <Link to={`/portfolios/${item.id}`}>
                <RankingItem>
                  <TitleContainer>
                    <TitlePart>{item.title}</TitlePart>
                    <ContentPart>@ {item.member.name}</ContentPart>
                  </TitleContainer>
                  <ItemImg src={thumbnail} alt={item.title} />
                </RankingItem>
              </Link>
            );
          })
        : null}
      </RankingItemContainer>
    </RankingContainer>
  );
}