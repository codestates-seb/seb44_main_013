import styled from 'styled-components';

export const SectionWrapper = styled.div``;

export const ImageWrapper = styled.div`
  position: relative;
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
