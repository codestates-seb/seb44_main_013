/* 2023-07-04 주소, 모양, 사이즈를 입력 받는 이미지 아토믹 컴포넌트 - 김다함*/
import { styled, css } from 'styled-components';
import tw from 'twin.macro';

interface ImageProps {
    url?: string;
    shape?: string;
    size: number | string;
}

const ImageContainer = styled.div<{ shape?: string, size: number | string }>`
    ${(props) => props.shape === 'circle' &&
        css`
            width: ${typeof props.size === 'string' ? props.size : `${props.size}px`};
            height: ${typeof props.size === 'string' ? props.size : `${props.size}px`};
        `
    // &&
    // tw`overflow-hidden`
    }
`

const FeatherImage = styled.img<{ shape?: string, size: number | string }>`
    ${(props) => props.shape === 'circle' && tw`rounded-full min-w-full min-h-full`}
    height: ${(props) => typeof props.size === 'string' ? props.size : `${props.size}px`};
`;

export const Image = ({ url, shape, size }: ImageProps) => {
    return (
        <ImageContainer shape={shape} size={size}>
            <FeatherImage src={url} shape={shape} size={size} />
        </ImageContainer>
    )
}

export default Image;