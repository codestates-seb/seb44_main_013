package com.portfolly.server.comment.service;


import com.portfolly.server.board.entity.Board;
import com.portfolly.server.board.respository.BoardRepository;
import com.portfolly.server.board.service.BoardService;
import com.portfolly.server.comment.entity.Comment;
import com.portfolly.server.comment.respository.CommentRepository;
import com.portfolly.server.exception.businessLogicException.BusinessLogicException;
import com.portfolly.server.exception.businessLogicException.ExceptionCode;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {

    private final MemberService memberService;
    private final CommentRepository commentRepository;
    private final BoardService boardService;

    @Autowired
    public CommentService(MemberService memberService, CommentRepository commentRepository, BoardService boardService) {
        this.memberService = memberService;
        this.commentRepository = commentRepository;
        this.boardService = boardService;
    }

    @Transactional
    public Comment creatComment(Comment comment, Long boardId
                                //, Long memberId
                                ) {
//        Member verifiedMember = memberService.findMember(memberId);\
        comment.setBoard(boardService.findBoard(boardId));
        return commentRepository.save(comment);
    }


    @Transactional
    public Comment updateComment(Comment comment, Long boardId
                                 //, Long memberId,
                                 ) {
//        Member verifiedMember = memberService.findMember(memberId);
        Board verifiedBoard = boardService.verifyBoard(boardId);
        Comment verifiedComment = verifyComment(comment.getId());

        verifiedComment.setContent(comment.getContent());

        return commentRepository.save(verifiedComment);
    }

    // boardId가 n에 속하는 comment 리스트 가져오기
//    @Transactional(readOnly = true)
//    public List<Comment> getComments(Long boardId) {
//        return commentRepository.findCommentsByBoardId(boardId);
//    }


    @Transactional
    public void deleteComment(Long commentId
                              //, Long memberId
                              ) {
//        Member verifiedMember = memberService.findMember(memberId);
        Comment verifiedComment = verifyComment(commentId);
        verifiedComment.setStatus(Comment.Status.COMMENT_INACTIVE);
    }



    //-------------------------------



    @Transactional(readOnly = true)
    public Comment verifyComment(Long commentId) {
        Optional<Comment> optionalComment = commentRepository.findById(commentId);
        Comment findedComment =
                optionalComment.orElseThrow(() -> new BusinessLogicException(ExceptionCode.COMMENT_NOT_EXIST));
        return findedComment;
    }


}
