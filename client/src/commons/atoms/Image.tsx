import {styled, css} from 'styled-components';
import tw from 'twin.macro';

interface ImageProps {
    url?: string;
    shape?: string;
    size: number | string;
}

const ImageContainer = styled.div<{shape?:string, size:number|string}>`
    ${(props)=> props.shape === 'circle' &&
        css`
            width: ${typeof props.size === 'string' ? props.size : `${props.size}px`};
            height: ${typeof props.size === 'string' ? props.size : `${props.size}px`};
        `
        // &&
        // tw`overflow-hidden`
    }
`

const FeatherImage = styled.img<{shape?:string, size:number|string}>`
    ${(props)=> props.shape === 'circle' && tw`rounded-full min-w-full min-h-full`}
    height: ${(props)=> typeof props.size === 'string' ? props.size : `${props.size}px`};
`;

export const Image = ({url, shape, size}:ImageProps)=>{
    return (
        <ImageContainer shape={shape} size={size}>
            <FeatherImage src={url} shape={shape} size={size}/>
        </ImageContainer>
    )
}

export default Image;