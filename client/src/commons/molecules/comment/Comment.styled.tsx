import { styled } from 'styled-components';
import tw from 'twin.macro';

import { FlexBetweenWrapper, FlexColumnContainer } from '@/commons/styles/Containers.styled';

export const CommentContainer = tw(FlexColumnContainer)`
  w-full border-b-[1px] pb-1.5 pt-3
`

export const CommentWrapper = tw(FlexBetweenWrapper)`
  w-full
`

export const CommentInput = styled.textarea`
  ${tw`w-full h-20 px-2 py-1 resize-none rounded-md border-[0.5px]`}
  &:focus {outline: none;}
  border-color: gray;
  font-size: 13px;
  color:black;
`