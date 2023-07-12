/* 2023-07-04 게시물 카테고리 선택 드롭다운 컴포넌트 - 김다함 */
import { styled } from 'styled-components';
import tw from 'twin.macro';
import DropDownBox from '../atoms/dropdown/DropDownBox';
import DropDownItem from '../atoms/dropdown/DropDownItem';
import { FlexColumnWrapper } from '../styles/Containers.styled';
import { useState } from 'react';

export const DropDownItemContainer = styled.div`
    ${tw`w-28 flex flex-col z-10 absolute`}
    border: 1px solid #C3C3C3;
    border-top: 0;
    background-color: rgba(72, 72, 72, 0.9);
    top: 117px;
`;

export const ContegroyDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState('웹');

  const selectHandler = (e: React.MouseEvent<HTMLElement>) => {
    setIsOpen(!isOpen);
    console.log(e)
    // setSelectValue(e);
  }

  return (
    <FlexColumnWrapper gap={0}>
      <DropDownBox value={'웹'} openHandler={setIsOpen} isOpen={isOpen} />
      {isOpen &&
        <DropDownItemContainer>
          <DropDownItem value='앱' onClick={selectHandler} />
          <DropDownItem value='웹' onClick={selectHandler} />
          <DropDownItem value='3D/애니메이션' onClick={selectHandler} />
          <DropDownItem value='디자인/일러스트' onClick={selectHandler} />
          <DropDownItem value='사진/영상' onClick={selectHandler} />
        </DropDownItemContainer>
      }
    </FlexColumnWrapper>
  )
}

export default ContegroyDropDown;