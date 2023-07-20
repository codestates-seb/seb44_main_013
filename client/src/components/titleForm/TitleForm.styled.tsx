import { styled } from 'styled-components';
import tw from 'twin.macro';

import { PortfolioEditButton, PortfolioCheckButton } from '@/pages/portfolio-edit/PortfolioEdit.styled';
import { FlexColumnWrapper, FlexWrapper } from '@/commons/styles/Containers.styled';
import { ModalContainer } from '@/components/modal/Modal.styled';
import { InputLabelText, SmallText } from '@/commons/atoms/text/Typography';

export const Form = styled(FlexColumnWrapper)``;
export const Row = styled(FlexWrapper)``;

export const ExplainTextArea = styled.textarea`
    ${tw`w-[45%] h-20 px-2 py-1 resize-none rounded-md border-[0.5px]`}
    box-shadow: inset 0px 0px 33px -6px #111111;
    background-color: #3A3B41;
    border-color: gray;
    color: white;
    font-size: 13px;
    outline: none;
`

export const PortfolioTitleInput = styled.input`
    ${tw`w-full bg-transparent text-4xl border-0`}
    color: white;
    &:focus{
        ${tw`outline-0`}
    }
`;

export const TitleFormContainer = styled.div`
      ${tw`w-screen px-16 py-7 rounded-t-2xl z-20 bottom-0 absolute`};
      background-color: #161616;
      box-shadow: 0 -8px 10px -1px #a9a9a9;
  `;

export const TagsContainer = tw.div`
  flex gap-1.5 w-[40%] flex-wrap z-0
`
export const BackgroundContainer = styled(ModalContainer)``

export const SubmitButton = styled(PortfolioCheckButton)``;

export const GoBackButton = tw(PortfolioEditButton)`
  absolute bottom-10 right-36
`;

export const InputLabel = styled(InputLabelText)``;

export const CreatedAt = styled(SmallText)``;
