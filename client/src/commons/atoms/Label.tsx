/* 2023-07-04 다양한 크기의 볼드체 컴포넌트(UserProfile에 사용됨) - 김다함*/
import { styled } from 'styled-components';

interface LabelProps {
    text: string;
    size: number;
}

const Text = styled.label<{ size: number }>`
    font-size: ${(props) => props.size}px;
    font-weight: 600;
    color: #232629;
`;

const Label = ({ size, text }: LabelProps) => {
    return (
        <Text size={size}>{text}</Text>
    )
}

export default Label;