// PhotographySection.styled.js
import styled from 'styled-components';

export const SectionWrapper = styled.div`
  /* 전체 섹션의 스타일 */
`;

export const ImageWrapper = styled.div`
  position: relative;
  /* 이미지 래퍼의 스타일 */
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 텍스트 오버레이의 스타일 */
`;

export const Title = styled.h1`
  font-size: 48px;
  color: white;
  /* 타이틀의 스타일 */
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  color: white;
  /* 서브타이틀의 스타일 */
`;
