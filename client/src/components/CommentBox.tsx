/* 2023-07-05 게시물 상세보기 페이지 댓글 영역 컴포넌트 - 김다함 */
import Card from '@/commons/atoms/Card';
import Comment from '@/commons/molecules/Comment';
import { FlexColumnContainer } from '@/commons/styles/Containers.styled';
import CommentWriteBox from '@/commons/molecules/CommentWriteBox';
import { CommentProps } from '@/types';


export default function CommentBox( {comment}:any) {
    return (
        <Card>
            <FlexColumnContainer gap={0} className="overflow-scroll">
                {
                    comment.map((e:CommentProps) => {
                        return (<Comment key={e.comments_id}
                                        username={e.name}
                                        content={e.content}
                                        date={e.createdAt}
                                        comment={e}
                                />
                        )
                    })
                }
            </FlexColumnContainer>
            <CommentWriteBox/>
        </Card>
    )
} 