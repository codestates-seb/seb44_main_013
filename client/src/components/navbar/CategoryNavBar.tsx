/* 2023-07-02 메인(카테고리)페이지 카테고리 navBar 컴포넌트 UI - 김다함*/
import { useDispatch } from 'react-redux';

import { CATEGORY_TYPE } from '@/types';

import { setCategory } from '@/store/categorySlice';

import CategoryButton from '@/commons/atoms/buttons/category/CategoryButton';
import { FlexContainer } from '@/commons/styles/Containers.styled';
import { StyleSheetManager } from 'styled-components';

export default function CategoryNavBar() {
  const Categories: Array<CATEGORY_TYPE> = ['web', 'app', '3danimation', 'graphicdesign', 'photo'];
  const dispatch = useDispatch();

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'gap'}>
      <FlexContainer gap={20} bg="transparent" className="sticky top-0 z-50">
        {Categories.map((category, index) => {
          return <CategoryButton onClick={() => dispatch(setCategory(category))} category={category} key={index} />;
        })}
      </FlexContainer>
    </StyleSheetManager>
  );
}
