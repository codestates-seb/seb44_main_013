import styled from 'styled-components';

export const SectionWrapper = styled.div``;

export const ImageWrapper = styled.div`
  position: relative;
  .image {
    width: 100%; // 이미지의 너비를 ImageWrapper의 너비에 맞춤
    height: 100vh; // 이미지의 높이를 뷰포트의 높이에 맞춤
    object-fit: cover; // 이미지의 비율을 유지하면서, 지정한 너비와 높이에 맞게 이미지를 잘라내거나 확대/축소
  }
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
  opacity: 0;
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  color: white;
  opacity: 0;
`;
