import DetailGuide from '@/components/detailGuide/DetailGuide';
import tw from 'twin.macro';
import styled from 'styled-components';

export const EditorContainer = styled.div`
  ${tw`
    flex
    flex-row
    justify-evenly
    mt-16
  `}

  .addTitle {
    ${tw`
      pl-3
    `}

    font-size: 20px;
  }

  .reactQuillContainer {
    ${tw`
      bg-white
    `}
    div:nth-child(2) {
      height: 28rem;
    }
  }

  .guideContainer {
    ${tw`
      mt-7
    `}
  }
`;

export const TextEditorContainer = styled.div`
  ${tw`
    relative
    w-2/3
    h-[45rem]
  `}
`;

export const TextEditor = styled.div`
  ${tw`
    flex-initial
    w-full
    h-auto
    px-5
    pt-5
    pb-12
    rounded-md
    relative
  `}

  background-color: #f0f0f0;

  hr {
    ${tw`
      mb-5
    `}
    border-color: #ccc;
  }
`;

export const TitleAdd = styled.input`
  ${tw`
    w-full
    my-2
    outline-none
    px-5
    py-2
    bg-white
    rounded
  `}

  font-size: 20px;
  border: 1px solid #e5e7eb;
`;

export const Guide = styled(DetailGuide)`
  ${tw`
    flex-1
    border
    border-gray-200
  `}
`;

export const SaveBtnContainer = styled.div`
  ${tw`
    absolute
    bottom-2.5
    right-5
  `}
`;
