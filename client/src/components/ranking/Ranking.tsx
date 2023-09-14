import { Link } from 'react-router-dom';

import { Portfolio } from '@/types';
import { ContentPart, ItemImg, RankingContainer, RankingItem, TitleContainer, TitlePart } from './Ranking.styled';
import noPic from '@/assets/noPic.png';

export default function Ranking(items: any) {
  const rankingData = items.items.sort((a: Portfolio, b: Portfolio) => b.view - a.view);
  console.log(rankingData);
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
