/* 2023-07-05 게시물 상세보기 페이지 댓글 영역 컴포넌트 - 김다함 */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Card from '@/commons/atoms/Card';
import Comment from '@/commons/molecules/Comment';
import CommentWriteBox from '@/commons/molecules/CommentWriteBox';

import { CommentProps } from '@/types';

import { JbWrapper } from '@/pages/community-detail/CommunityDetail.styled';
import { FlexColumnContainer } from '@/commons/styles/Containers.styled';

import { call } from '@/utils/ApiService';


export default function CommentBox( {comments = [] }:any) { // comment => comments
    const [ currentComment, setCurrentComment ] = useState('');
    //is로 시작하면 boolean으로 생각할 수도 있다. (isInput -> currentComment)
    //Fn+f2
    const [ amendComment, setAmendComment ] = useState(comments);
    const [ deleteId, setDeleteId ] = useState(null);
    const { board_id:boardId } = useParams(); //수정
    
    const handleComment = ( value: string ) => {
        setCurrentComment(value);
    }

    //return문이 없고 async 체크 필요 -> await으로 받는 부분이 없음. (0712)
    //async - await 
    const saveComment = () => {
        const addNewComment = () => call(`/comments`, 'POST', {
            boardId: boardId,
            content: currentComment,
        });
        const axiosPost = async () => {
            return addNewComment()
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log('댓글 등록 에러' + err))
        } 

        axiosPost();
        amendComment.push({
            comments_id:comments.length + 1,
            content: currentComment,
            name: 'jhj',
            createdAt: "2023-06-21T17:34:51.3395597",
            modifiedAt:"2023-06-21T17:34:51.3395597",
            status: "POST_ACTIVE"
        });
        setCurrentComment('');
        // console.log(comments);
        // console.log(amendComment);
    };

    useEffect(() => {
        //약자는 최대한 쓰지 말자.
        const index = amendComment.findIndex((element:any) => element.comments_id === deleteId);

        // 첫번째 댓글 지울 때 
        if( index === 0 ){ // 수정합시당 : 과제 
            setAmendComment(amendComment.slice(1, amendComment.length));
        }
        // 둘이 겹침 
        if( index > 0 ) {
            setAmendComment(amendComment.slice(0, index).concat(amendComment.slice(index+1, amendComment.length)));
        }

        // else if 쓰지말장. - 현직자들이 싫어한당
        setDeleteId(null);
        // console.log(newComment);
        // -1 는 직독이해가 되지 않는다. 명시적 data 사용 ex. null
    }, [deleteId])

    // console.log(amendComment)

    return (
        <Card>
            <JbWrapper >
                <FlexColumnContainer gap={0} className="overflow-scroll">
                    {/* prettier amendcomment -> ammendComments  ;; element -> amendComment*/}
                    {
                        amendComment.map((element:CommentProps) => {
                            return (<Comment key={element.comments_id}
                                            username={element.name}
                                            content={element.content}
                                            date={element.createdAt}
                                            comments={element}
                                            setDeleteId={setDeleteId}
                                            setAmendComment={setAmendComment}
                                    />
                            )
                        })
                    }
                </FlexColumnContainer>
                <CommentWriteBox saveComment={saveComment} handleComment={handleComment} isInput={currentComment}/>
            </JbWrapper>
        </Card>
    )
} 