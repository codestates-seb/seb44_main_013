import styled from 'styled-components';

export const SectionWrapper = styled.div``;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  opacity: 1;
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
`;
