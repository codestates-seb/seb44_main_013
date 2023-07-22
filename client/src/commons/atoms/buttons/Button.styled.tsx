import tw from 'twin.macro';
import { styled } from 'styled-components';

export const Button = tw.button`
  text-sm
  text-white
  rounded-xl
  px-4
  py-1
  transition duration-300 ease-in-out
  max-md:text-xs
  select-none
`;

export const Purpletype = styled(Button)`
  ${tw`bg-POINT_COLOR
  w-fit
  whitespace-nowrap`}

  &:hover {
    ${tw`bg-HOVER_COLOR`}
  }
`;

//writingBtn 커스터마이징 타입
export const Writingtype = styled(Purpletype)`
  ${tw`
    px-10
    py-2
  `}
`;
export const BackButton = tw.button`
  p-2
  cursor-pointer
  text-BASIC_WHITE
`;

//EditBtn & DeleteBtn 커스터마이징 타입
export const Edittype = styled(Purpletype)`
  ${tw`
    bg-zinc-300
    w-20
    py-1
    text-base
    rounded-lg
  `}
`;

// 삭제 확인 모달 취소 버튼
export const DeleteCancelButton = styled(Purpletype)`
  ${tw`
    bg-white
    text-POINT_COLOR
  `}

  border: 1px solid #8580E1;

  &:hover{
    ${tw`
      bg-gray-200
    `}
  }
`;