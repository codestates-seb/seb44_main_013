/* 2023-07-05 게시물 댓글(낱개) 컴포넌트 - 김다함 */
import { FlexColumnContainer, FlexWrapper } from '../styles/Containers.styled';
import UserProfile from './UserProfile';
import ReviseBtn from '../atoms/buttons/revise-remove/ReviseBtn';
import RemoveBtn from '../atoms/buttons/revise-remove/RemoveBtn';
import { BodyText, SmallText } from '../atoms/Typography';

interface CommentProps {
    username: string;
    content: string;
    date: string;
}

export default function Comment({ username, content, date }: CommentProps) {
    return (
        <FlexColumnContainer gap={10} className='w-full border-b-[1px] pb-1.5 pt-3'>
            <FlexWrapper gap={0} className='w-full justify-between'>
                <UserProfile type='comment' username={username} />
                <FlexWrapper gap={0}>
                    <ReviseBtn color={'#d4d4d8'} />
                    <RemoveBtn color={'#d4d4d8'} />
                </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper gap={0} className='w-full justify-between'>
                <BodyText>{content}</BodyText>
                <SmallText color='gray'>{date}</SmallText>
            </FlexWrapper>
        </FlexColumnContainer>
    )
}