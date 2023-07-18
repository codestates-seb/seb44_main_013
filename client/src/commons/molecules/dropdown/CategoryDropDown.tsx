/* 2023-07-04 게시물 카테고리 선택 드롭다운 컴포넌트 - 김다함 */
import { useSelector } from 'react-redux/es/hooks/useSelector';

import { category, isOpened } from '@/modules/categorySlice';

import { FlexColumnWrapper } from '@/commons/styles/Containers.styled';
import { DropDownItemContainer } from './CategoryDropdown.styled';
import DropDownBox from '@/commons/atoms/dropdown/DropDownBox';
import DropDownItem from '@/commons/atoms/dropdown/DropDownItem';

export default function ContegroyDropDown() {
  const selectedCategory = useSelector(category);
  const isOpen = useSelector(isOpened);

  return (
    <FlexColumnWrapper>
      <DropDownBox dropdownItem={selectedCategory} />
      {isOpen &&
        <DropDownItemContainer>
          <DropDownItem value="웹" />
          <DropDownItem value="앱" />
          <DropDownItem value="3D/애니메이션" />
          <DropDownItem value="그래픽디자인" />
          <DropDownItem value="사진/영상" />
        </DropDownItemContainer>
      }
    </FlexColumnWrapper>
  )
}