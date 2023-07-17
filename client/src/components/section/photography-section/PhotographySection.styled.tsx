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
`;

export const Title = styled.h1`
  &.photo-title {
    font-size: calc(8vw - 8px);
    color: white;
  }
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  color: white;
`;
