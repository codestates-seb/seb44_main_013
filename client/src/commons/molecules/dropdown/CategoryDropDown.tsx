/* 2023-07-04 게시물 카테고리 선택 드롭다운 컴포넌트 - 김다함 */
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { CATEGORY_TYPE, CategoryMapper } from '@/types';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { initializeTag, setCategory, portfolio } from '@/store/portfolioSlice';

import { categories } from '@/assets/data/category';

import { FlexColumnWrapper } from '@/commons/styles/Containers.styled';
import { DropDownItemContainer } from './CategoryDropdown.styled';
import DropDownBox from '@/commons/atoms/dropdown/DropDownBox';
import DropDownItem from '@/commons/atoms/dropdown/DropDownItem';

export default function ContegroyDropDown() {
  const dispatch = useDispatch();
  const savedPortfolio = useSelector(portfolio);
  const [isOpen, setIsOpen] = useState(false);

  const catagoryMapper: CategoryMapper = {
    "웹": "web",
    "앱": "app",
    "3D/애니메이션": "3danimation",
    "그래픽디자인": "graphicdesign",
    "사진/영상": "photo",
  };

  const onClick = () => {
    setIsOpen(!isOpen);
  }

  const selectCategory = (item: CATEGORY_TYPE) => {
    setIsOpen(!isOpen);
    dispatch(setCategory(item));
    dispatch(initializeTag());
  }

  const matchCategory = (category: string) => {
    return catagoryMapper[category];
  }

  return (
    <FlexColumnWrapper>
      <DropDownBox dropdownItem={savedPortfolio.category} isOpen={isOpen} onClick={onClick} />
      {isOpen &&
        <DropDownItemContainer>
          {
            categories.map((category: CATEGORY_TYPE) => {
              return <DropDownItem item={category} onClick={() => selectCategory(matchCategory(category))} />
            })
          }
        </DropDownItemContainer>
      }
    </FlexColumnWrapper>
  )
}