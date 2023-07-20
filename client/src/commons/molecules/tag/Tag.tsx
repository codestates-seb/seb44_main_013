/* 2023-07-05 태그 컴포넌트 - 김다함 */
import { Dispatch, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CategoryTags, Tag as TTag } from '@/types';

import { RxDotFilled } from 'react-icons/rx';
import { TagBody } from './Tag.styled';
import { portfolio, setTag } from '@/store/portfolioSlice';

interface TagProps {
  tag: TTag;
  readOnly?: boolean;
  categoryTags?: CategoryTags;
  setCategoryTags?: Dispatch<SetStateAction<CategoryTags>>;
}

export const Tag = ({ tag, readOnly, categoryTags, setCategoryTags }: TagProps) => {
  const isEditMode = setCategoryTags;
  const savedPortfolio = useSelector(portfolio);
  const selectedCategory = savedPortfolio.category;
  const dispatch = useDispatch();

  const selectTag = () => {
    if (readOnly) return;
    if (isEditMode) {
      const copiedCurrentTags = JSON.parse(JSON.stringify(categoryTags));
      const updateTags = copiedCurrentTags[selectedCategory].tags.map((tagItem: TTag) => {
        if (tagItem.tagId === tag.tagId) {
          tagItem.isSelected = !tagItem.isSelected;
          dispatch(setTag(tagItem));
        }
        return tagItem;
      })
      copiedCurrentTags[selectedCategory].tags = updateTags;
      setCategoryTags(copiedCurrentTags);
    }
  }

  return (
    <TagBody isSelected={tag.isSelected} onClick={selectTag} readOnly={readOnly}>
      <p className='text-xs'>{tag.name}</p>
      {tag.isSelected && !readOnly && <RxDotFilled className='dot' />}
    </TagBody>
  )
}

export default Tag;