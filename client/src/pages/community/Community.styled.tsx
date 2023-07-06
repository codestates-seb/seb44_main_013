import DetailGuide from '@/components/detailGuide/DetailGuide';
import tw from 'tailwind-styled-components';

export const EditorContainer = tw.div`
  flex
  flex-row
  justify-around
  mt-20
`;

export const TextEditor = tw.div`
  flex-2
  border-4
  border-gray-200
  w-2/3
  h-[45rem]
`;

export const Guide = tw(DetailGuide)`
  flex-1
  border
  border-gray-200
`;

export const SaveBtnContainer = tw.div`
  flex
  justify-end
  mt-5
  mr-[35rem]
`;
