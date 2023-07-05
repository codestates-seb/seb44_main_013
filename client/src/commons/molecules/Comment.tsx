/* 2023-07-05 게시물 카테고리 선택 드롭다운 컴포넌트 - 김다함 */
import { styled } from 'styled-components';
import tw from 'twin.macro';
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
        <FlexColumnContainer gap={10} className='w-full border-b-[1px] pb-2'>
            <FlexWrapper gap={0} className='w-full justify-between'>
                <UserProfile type='comment' username={username} />
                <FlexWrapper gap={0}>
                    <ReviseBtn />
                    <RemoveBtn />
                </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper gap={0} className='w-full justify-between'>
                <BodyText>{content}</BodyText>
                <SmallText color='gray'>{date}</SmallText>
            </FlexWrapper>
        </FlexColumnContainer>
    )
}