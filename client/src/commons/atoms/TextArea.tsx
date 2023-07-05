import { styled } from 'styled-components';
import tw from 'twin.macro';

interface TextAreaProps {
}

const TextBox = styled.textarea`
    ${tw`resize-none outline-0`}
    background-color: #3A3B41;
`;

const TextArea = ({ }: TextAreaProps) => {
    return (
        <TextBox></TextBox>
    )
}

export default TextArea;