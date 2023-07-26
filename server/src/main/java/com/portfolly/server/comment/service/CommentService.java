package com.portfolly.server.comment.service;


import com.portfolly.server.board.dto.MemberInfo;
import com.portfolly.server.board.entity.Board;
import com.portfolly.server.board.respository.BoardRepository;
import com.portfolly.server.board.service.BoardService;
import com.portfolly.server.comment.dto.CommentDto;
import com.portfolly.server.comment.entity.Comment;
import com.portfolly.server.comment.mapper.CommentMapper;
import com.portfolly.server.comment.respository.CommentRepository;
import com.portfolly.server.exception.businessLogicException.BusinessLogicException;
import com.portfolly.server.exception.businessLogicException.ExceptionCode;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.member.service.MemberService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@AllArgsConstructor
@Service
public class CommentService {

    private final MemberService memberService;
    private final CommentRepository commentRepository;
    private final CommentMapper commentMapper;
    private final BoardService boardService;


    private CommentDto.Response creatResponse(Comment comment) {
        CommentDto.Response response = commentMapper.commentToResponse(comment);
        response.setMemberInfo(MemberInfo.builder()
                .memberId(comment.getMember().getId())
                .name(comment.getMember().getName())
                .imageUrl(comment.getMember().getImageUrl())
                .build());
        return response;
    }

    //----------------------------------------------


    @Transactional
    public CommentDto.Response creatComment(Comment comment, Long boardId, Long memberId) {

        Board verifiedBoard = boardService.verifyBoard(boardId);// 2차 검증 : 게시글 존재여부

        Member member = memberService.findByMember(memberId);
        comment.setBoard(verifiedBoard);
        comment.setMember(member);
        commentRepository.save(comment);

        return creatResponse(comment);
    }


    @Transactional
    public CommentDto.Response updateComment(Comment comment, Long boardId, Long memberId) {

        boardService.verifyBoard(boardId);                         // 2차 검증 : 게시글 존재여부
        Comment verifiedComment = verifyComment(comment.getId());  // 3차 검증 : 댓글 존재여부
        verifyWriter(comment, memberId);                           // 4차 검증 : 댓글 작성자 확인

        Optional.ofNullable(comment.getContent())
                .ifPresent(verifiedComment::setContent);

        return creatResponse(verifiedComment);
    }

    public CommentDto.Response getComment(Long commentId) {
        Comment verifiedComment = verifyComment(commentId);
        Long boardId = verifiedComment.getBoard().getId();
        Comment foundComment = commentRepository.findCommentByStatusAndBoardId(Comment.Status.COMMENT_ACTIVE, boardId);

        return creatResponse(foundComment);
    }


    @Transactional
    public void deleteComment(Long commentId, Long memberId) {

        Comment verifiedComment = verifyComment(commentId);           // 2차 검증 : 댓글 존재여부
        boardService.verifyBoard(verifiedComment.getBoard().getId()); // 3차 검증 : 게시글 존재여부
        verifyWriter(verifiedComment, memberId);                      // 4차 검증 : 댓글 작성자 확인

        verifiedComment.setStatus(Comment.Status.COMMENT_INACTIVE);
    }



    //-------------------------------



    @Transactional(readOnly = true)
    public Comment verifyComment(Long commentId) {
        Optional<Comment> optionalComment = commentRepository.findById(commentId);
        Comment foundComment =
                optionalComment.orElseThrow(() -> new BusinessLogicException(ExceptionCode.COMMENT_NOT_EXIST));

        if (foundComment.getStatus() != Comment.Status.COMMENT_ACTIVE)
            throw new BusinessLogicException(ExceptionCode.COMMENT_DELETED);

        return foundComment;
    }

    // 댓글 작성자 확인
    @Transactional(readOnly = true)
    public void verifyWriter(Comment comment, Long memberId) {
        Comment foundComment = commentRepository.findById(comment.getId()).get();
        if(!foundComment.getMember().getId().equals(memberId)) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_MATCH);
        }
    }
}