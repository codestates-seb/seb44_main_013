import { styled } from 'styled-components';
import tw from 'twin.macro';

import { FlexBetweenWrapper, FlexColumnContainer } from '@/commons/styles/Containers.styled';

export const CommentContainer = styled(FlexColumnContainer)`
  ${tw`w-full border-b-[1px] pb-1.5 pt-3`}
`

export const CommentWrapper = styled(FlexBetweenWrapper)`
  ${tw`w-full`}
`