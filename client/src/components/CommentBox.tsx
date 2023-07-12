/* 2023-07-05 게시물 상세보기 페이지 댓글 영역 컴포넌트 - 김다함 */
import Card from '@/commons/atoms/Card';
import Comment from '@/commons/molecules/Comment';
import { FlexColumnContainer } from '@/commons/styles/Containers.styled';
import CommentWriteBox from '@/commons/molecules/CommentWriteBox';
import { CommentProps } from '@/types';

import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { JbWrapper } from '@/pages/community-detail/CommunityDetail.styled';


export default function CommentBox( {comment, }:any) {
    const [isInput, setIsInput ] = useState('');
    const [ amendComment, setAmendComment ] = useState(comment);
    const board_id = useParams();
    
    const handleComment = ( value: string ) => {
        setIsInput(value);
    }

    const saveComment = () => {
        const axiosPost = async () => {
        try{
            console.log('POST 성공');

            axios('/comments', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({ 
                board_id: board_id,
                content: isInput,
            })
            })
            //console.log(board_id);

        } catch(err) {
            console.log('POST실패 ' + err);
        }
        };

        axiosPost();
        comment.push({
            comments_id:comment.length + 1,
            content: isInput,
            name: 'jhj',
            createdAt: "2023-06-21T17:34:51.3395597",
            modifiedAt:"2023-06-21T17:34:51.3395597"
        });
        setIsInput('');
        //console.log(comment);
    }

    return (
        <Card>
            <JbWrapper >
                <FlexColumnContainer gap={0} className="overflow-scroll">
                    {
                        comment.map((e:CommentProps) => {
                            return (<Comment key={e.comments_id}
                                            username={e.name}
                                            content={e.content}
                                            date={e.createdAt}
                                            comment={e}
                                            amendComment={amendComment}
                                            setAmendComment={setAmendComment}
                                    />
                            )
                        })
                    }
                </FlexColumnContainer>
                <CommentWriteBox saveComment={saveComment} handleComment={handleComment} isInput={isInput}/>
            </JbWrapper>
        </Card>
    )
} 