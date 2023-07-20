/* 2023-07-04 게시물 카테고리 선택 드롭다운 컴포넌트 - 김다함 */
import { useSelector } from 'react-redux/es/hooks/useSelector';

import { FlexColumnWrapper } from '@/commons/styles/Containers.styled';
import { DropDownItemContainer } from './CategoryDropdown.styled';
import DropDownBox from '@/commons/atoms/dropdown/DropDownBox';
import DropDownItem from '@/commons/atoms/dropdown/DropDownItem';
import { categories } from '@/assets/data/category';
import { CATEGORY_TYPE } from '@/types';
import { initializeTag, setCategory, portfolio } from '@/store/portfolioSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function ContegroyDropDown() {
  const dispatch = useDispatch();
  const savedPortfolio = useSelector(portfolio);
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  }

  const selectCategory = (item: CATEGORY_TYPE) => {
    setIsOpen(!isOpen);
    dispatch(setCategory(item));
    dispatch(initializeTag());
  }

  return (
    <FlexColumnWrapper>
      <DropDownBox dropdownItem={savedPortfolio.category} isOpen={isOpen} onClick={onClick} />
      {isOpen &&
        <DropDownItemContainer>
          {
            categories.map((category: CATEGORY_TYPE) => {
              return <DropDownItem item={category} onClick={() => selectCategory(category)} />
            })
          }
        </DropDownItemContainer>
      }
    </FlexColumnWrapper>
  )
}