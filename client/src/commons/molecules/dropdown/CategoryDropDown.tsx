/* 2023-07-04 게시물 카테고리 선택 드롭다운 컴포넌트 - 김다함 */
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux/es/hooks/useSelector';
import { initializeTag, setCategory, portfolio } from '@/store/portfolioSlice';

import { categories } from '@/assets/data/category';

import { FlexColumnWrapper } from '@/commons/styles/Containers.styled';
import { DropDownItemContainer } from './CategoryDropdown.styled';
import DropDownBox from '@/commons/atoms/dropdown/DropDownBox';
import DropDownItem from '@/commons/atoms/dropdown/DropDownItem';

const catagoryMapper: any = {
  "web": "웹",
  "app": "앱",
  "3danimation": "3D/애니메이션",
  "graphicdesign": "그래픽디자인",
  "photo": "사진/영상",
};

export default function ContegroyDropDown() {
  const dispatch = useDispatch();
  const savedPortfolio = useSelector(portfolio);
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  }

  const selectCategory = (item: string) => {
    setIsOpen(!isOpen);
    dispatch(setCategory(item));
    dispatch(initializeTag());
  }

  const matchCategory = (category: string) => {
    return catagoryMapper[category];
  }

  return (
    <FlexColumnWrapper>
      <DropDownBox dropdownItem={matchCategory(savedPortfolio.category)} isOpen={isOpen} onClick={onClick} />
      {isOpen &&
        <DropDownItemContainer>
          {
            categories.map((category: string) => {
              return <DropDownItem item={category} onClick={() => selectCategory(category)} />
            })
          }
        </DropDownItemContainer>
      }
    </FlexColumnWrapper>
  )
}