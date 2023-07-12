/* 2023-07-04 다양한 크기의 볼드체 컴포넌트(UserProfile에 사용됨) - 김다함*/
import { styled } from 'styled-components';

interface LabelProps {
  text: string;
  type: string;
  url?: string;
}

const LabelSizes: any = {
  board: 20,
  comment: 12,
  portfolio: 30,
  blackboard: 20
}

const Text = styled.a<{ size: string, type: string }>`
    font-size: ${(props) => props.size}px;
    font-weight: 600;
    color: ${(props) => props.type === 'portfolio' || props.type === 'blackboard'
    ? 'white' : '#232629'}
`;

const Label = ({ type, text, url }: LabelProps) => {
  return (
    <Text size={LabelSizes[type]} type={type} href={url}>{text}</Text>
  )
}

export default Label;