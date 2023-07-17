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
  opacity: 1; /* 텍스트를 보이도록 설정 */
`;

export const Title = styled.h1`
  &.animation-title {
    font-size: calc(12vw - 5px);
    color: white;
  }
`;

export const Subtitle = styled.h2`
  font-size: 26px;
  color: white;
  /* 서브타이틀의 스타일 */
`;
