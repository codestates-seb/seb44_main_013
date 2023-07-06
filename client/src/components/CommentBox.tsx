/* 2023-07-05 게시물 상세보기 페이지 댓글 영역 컴포넌트 - 김다함 */
import Card from '@/commons/atoms/Card';
import Comment from '@/commons/molecules/Comment';
import { FlexColumnContainer } from '@/commons/styles/Containers.styled';
import CommentWriteBox from '@/commons/molecules/CommentWriteBox';

interface CommentBoxProps {
    comment: 'CommentType'
}

export default function CommentBox({ comment }: CommentBoxProps) {
    return (
        <Card className='justify-between'>
            <FlexColumnContainer gap={0}>
                <Comment username='vite' content='zzzzz' date='2020-20-20' />
                <Comment username='vite' content='zzzzz' date='2020-20-20' />
            </FlexColumnContainer>
            <CommentWriteBox />
        </Card>
    )
} 