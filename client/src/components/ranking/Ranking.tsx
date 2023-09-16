import { Link } from 'react-router-dom';

import { Portfolio } from '@/types';
import { ContentPart, ItemImg, RankingContainer, RankingItem, TitleContainer, TitlePart } from './Ranking.styled';
import noPic from '@/assets/noPic.png';

interface RankingItemsTypes {
  items: [Portfolio];
}

export default function Ranking(items: RankingItemsTypes) {
  const rankingData = items.items.sort((a: Portfolio, b: Portfolio) => b.view - a.view);
  return (
    <RankingContainer>
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
    </RankingContainer>
  );
}
