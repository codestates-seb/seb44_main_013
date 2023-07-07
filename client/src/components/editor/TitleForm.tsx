/* 2023-07-04 포트폴리오 작성/수정 페이지 제목,태그 작성 Form - 김다함 */
import { useState } from 'react';
import { DarkTextArea } from '@/commons/styles/Inputs.styled';
import { InputLabelText, SmallText } from '@/commons/atoms/Typography';
import ContegroyDropDown from '@/commons/molecules/CategoryDropDown';
import Tag from '@/commons/molecules/Tag';
import { FlexColumnWrapper, FlexWrapper } from '@/commons/styles/Containers.styled';
import { PortfolioTitleInput } from '@/commons/styles/Inputs.styled';
import { styled } from 'styled-components';
import tw from 'twin.macro';
import { PortfolioEditButton } from '@/commons/styles/Buttons.styled';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { BsCheck2 } from 'react-icons/bs';   

interface TitleFormProps {
  isCreated: string;
  handleTitle: () => void;
}

const TitleFormContainer = styled.div`
    ${tw`w-screen px-16 py-7 rounded-t-2xl z-20 bottom-0 absolute`};
    background-color: #161616;
    box-shadow: 0 -8px 10px -1px #a9a9a9;
`;

const TitleForm = ({ isCreated, handleTitle }: TitleFormProps) => {


  return (
    <TitleFormContainer>
      <FlexColumnWrapper gap={15}>
        <PortfolioTitleInput placeholder='Title' />
        <FlexWrapper gap={10}>
          <ContegroyDropDown />
          <SmallText color='white' className='pt-2'>{isCreated}</SmallText>
        </FlexWrapper>
        <div className='flex gap-1.5 w-[40%] flex-wrap z-0'>
          {/* 예시 */}
          <Tag value='JavaScript' isSelected={true} />
          <Tag value='JavaScript' />
          <Tag value='JavaScript' />
          <Tag value='JavaScript' />
          <Tag value='JavaScript' />
          <Tag value='JavaScript' isSelected={true} />
          <Tag value='JavaScript' />
          <Tag value='JavaScript' />
          <Tag value='JavaScript' />
        </div>
        <InputLabelText color='#c8c9cc'>소개글</InputLabelText>
        <div className='flex justify-between'>
          <DarkTextArea className='w-[42%] h-20' />
          <FlexWrapper gap={15}>
            <PortfolioEditButton type='dark' onClick={handleTitle}><RiArrowGoBackFill size='25' color='white' /></PortfolioEditButton>
            <PortfolioEditButton type='light'><BsCheck2 size='25' color='black' /></PortfolioEditButton>
          </FlexWrapper>
        </div>
      </FlexColumnWrapper>
    </TitleFormContainer>
  )
}

export default TitleForm;