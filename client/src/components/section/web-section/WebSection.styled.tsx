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
  bottom: 0;
  left: 0;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: calc(20vw - 10px);
  color: white;
  opacity: 0; /* 초기에는 투명하게 설정 */

  /* 타이틀의 스타일 */
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  color: white;
  opacity: 0; /* 초기에는 투명하게 설정 */

  /* 서브타이틀의 스타일 */
`;
