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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const Title = styled.h1`
  &.app-title {
    font-size: calc(20vw - 10px);
    color: white;
  }
`;

export const Subtitle = styled.h2`
  font-size: 26px;
  color: white;
  /* 서브타이틀의 스타일 */
`;
