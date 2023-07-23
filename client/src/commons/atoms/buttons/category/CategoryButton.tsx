/* 2023-07-02 메인(카테고리)페이지 카테고리 navBar의 낱개 버튼 - 김다함*/
import 'styled-components/macro';
import tw from 'twin.macro';
import { styled } from 'styled-components';

export interface CategoryBtnProps {
  category: string;
  onClick: () => void;
}

// const Category = styled.button`
//   width: 180px;
//   ${tw`h-12 p-3 rounded-full border-0 whitespace-nowrap`}
//   background-color: rgba(245, 245, 245, 0.51);
//   box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
//     0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);

//   &:active {
//     color: white;
//     box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.1);
//   }

//   &:focus {
//     color: white;
//     box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.1);
//   }
// `;

// style1;
// const Category = styled.button`
//   ${tw`h-12 px-10 rounded-lg border border-gray-500 text-gray-500 hover:text-white hover:border-white focus:outline-none`}
//   background-color: transparent;
//   transition: all 0.3s ease-out;

//   &:active,
//   &:focus {
//     color: white;
//     border-color: white;
//     transform: scale(0.98);
//   }
// `;

//style2
// const Category = styled.button`
//   ${tw`h-12 px-6 text-gray-500 border-none bg-transparent transition-colors duration-300 ease-in-out transform hover:text-white focus:outline-none focus:text-white active:scale-95`}
// `;

// style3;
const Category = styled.button`
  ${tw`h-12 px-10 text-base font-semibold text-gray-400 uppercase tracking-wider border border-transparent rounded-md bg-transparent focus:outline-none transition-all duration-300 ease-in-out transform active:scale-95`}
  &:hover, &:focus {
    color: white;
  }
`;

export default function CategoryButton({
  category,
  onClick,
}: CategoryBtnProps) {
  return <Category onClick={onClick}>{category}</Category>;
}
