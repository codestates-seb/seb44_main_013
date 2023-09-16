import { Link } from 'react-router-dom';

import { Portfolio } from '@/types';
import { ContentPart, ItemImg, RankingContainer, RankingItem, TitleContainer, TitlePart, BigTitle, RankingItemContainer } from './Ranking.styled';
import noPic from '@/assets/noPic.png';
import { Dispatch, SetStateAction } from 'react';

interface RankingItemsTypes {
  items: Portfolio[];
  setTime: Dispatch<SetStateAction<string>>;
  timeUpdate: string;
}
 
export default function Ranking({items, setTime, timeUpdate}: RankingItemsTypes) {
  console.log(items);
  const rankingData = items.sort((a: Portfolio, b: Portfolio) => b.view - a.view);

  const handleTime = () => {
    setInterval(() => {
      const currentTime = new Date(new Date().getTime());
      const hour = currentTime.getHours();
      const divisionPeriod = hour > 12 ? '오후' : '오전';
      const changedHour = hour > 12 ? hour - 12 : hour;
      const updatedTimeSet = `${divisionPeriod} ${changedHour}시`;
      setTime(updatedTimeSet)
    }, 21600000);
//21600000
    console.log('인터벌 함수 실행합니다.', timeUpdate);
  }

  handleTime();

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