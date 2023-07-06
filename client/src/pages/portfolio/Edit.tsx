import { PortfolioEditButton } from '@/commons/styles/Buttons.styled';
import { FlexColumnContainer } from '@/commons/styles/Containers.styled';
import QuillEditor from '@/components/editor/QuillEditor';
import TitleForm from '@/components/editor/TitleForm';
import LogoHeader from '@/components/header/LogoHeader';
import { BsCheck2 } from 'react-icons/bs';

export default function Edit() {
  return (
    <FlexColumnContainer gap={0} className='mx-h-screen top-0 overflow-hidden'>
      <LogoHeader />
      <QuillEditor />
      {/* <TitleForm isCreated='' /> */}
      <PortfolioEditButton type='black' className='absolute bottom-16 right-14'>
        <BsCheck2 size='25' color='white' />
      </PortfolioEditButton>
    </FlexColumnContainer>
  )
}