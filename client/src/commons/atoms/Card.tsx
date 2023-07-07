/* 2023-07-05 각종 컴포넌트를 담는 Card 컴포넌트 - 김다함 */
import { styled } from 'styled-components';
import tw from 'twin.macro';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

const CardContainer = styled.div`
    ${tw`flex flex-col w-full h-full p-5 box-border rounded-2xl`}

    background-color: white;
    box-sizing: inherit;

    box-shadow: 0 10px 24px hsla(0,0%,0%,0.05), 0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
`;

export default function Card({ children }: CardProps) {
  return (
    <CardContainer>
      {children}
    </CardContainer>
  )
}