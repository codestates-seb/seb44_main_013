/* 2023-07-05 태그 컴포넌트 - 김다함 */
import useTagSelect from '@/hooks/useTagSelect';
import { Tag as tag } from '@/types/portfolio';

import { RxDotFilled } from 'react-icons/rx';
import { TagBody } from './Tag.styled';

interface TagProps {
  tag: tag;
  readOnly?: boolean;
  selected?: boolean;
}

export const Tag = ({ tag, readOnly, selected = false }: TagProps) => {
  const [isSelected, onClick] = useTagSelect({
    isSelected: selected,
    currentTag: tag,
  });

  return (
    <TagBody selected={isSelected} onClick={onClick} readOnly={readOnly}>
      <p className='text-xs'>{tag.name}</p>
      {isSelected && !readOnly && <RxDotFilled className='dot' />}
    </TagBody>
  )
}

export default Tag;