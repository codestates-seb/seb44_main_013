/* 2023-07-05 게시물 댓글 작성란 컴포넌트 - 김다함 */
import { FlexColumnContainer, FlexWrapper } from '../styles/Containers.styled';
import UserProfile from './UserProfile';
import { TextArea } from '@/commons/styles/Inputs.styled';
import SaveBtn from '../atoms/buttons/writing/SaveBtn';

export default function CommentWriteBox() {
    return (
        <FlexColumnContainer gap={5} className='w-full bt-[1px] mt-10'>
            <FlexWrapper gap={0} className='w-full justify-between'>
                <UserProfile type='comment' username='ehyo' date='39-29-39' />
                <SaveBtn />
            </FlexWrapper>
            <TextArea className='w-full h-20' />
        </FlexColumnContainer>
    )
} 