package com.portfolly.server.board.service;


import com.portfolly.server.board.entity.Board;
import com.portfolly.server.board.respository.BoardRepository;
import com.portfolly.server.comment.entity.Comment;
import com.portfolly.server.comment.respository.CommentRepository;
import com.portfolly.server.comment.service.CommentService;
import com.portfolly.server.exception.businessLogicException.BusinessLogicException;
import com.portfolly.server.exception.businessLogicException.ExceptionCode;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.member.repository.MemberRepository;
import com.portfolly.server.member.service.MemberService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;
    private final CommentRepository commentRepository;
    private final MemberService memberService;



    @Transactional
    public Board createBoard(Board board
                             //, Long memberId
                             ) {
        // Member verifiedmember = memberService.findMember(memberId);
        return boardRepository.save(board);
    }


    @Transactional
    public Board updateBoard(Board board
                             //, Long memberId
                             ) {
        // Member verifiedmember = memberService.findMember(memberId);
        Board verifiedBoard = verifyBoard(board.getId());

        Optional.ofNullable(board.getTitle())
                .ifPresent(verifiedBoard::setTitle);
        Optional.ofNullable((board.getContent()))
                .ifPresent(verifiedBoard::setContent);

        return verifiedBoard;
    }



    @Transactional(readOnly = true)
    public Board findBoard(Long boardId) {
        Board verifiedBoard = verifyBoard(boardId);
        List<Comment> comments = verifyComment(boardId);
        verifiedBoard.setComments(comments);
        return boardRepository.save(verifiedBoard);
    }


    @Transactional(readOnly = true)
    public List<Board> findBoards(Board.Division division) {
        return boardRepository.findBoardByDivision(division);
    }



    @Transactional(readOnly = true)
    public Page<Board> findPages(int page, int size, Board.Division division) {
        List<Board> boardByDivision = boardRepository.findBoardByDivision(division);
        Page<Board> pages = boardRepository.findAll(PageRequest.of(page, size));
        return pages;
    }


    @Transactional
    public void deleteBoard(Long boardId
                           //, Long memberId,
                            ) {
//        Member verifiedMember = memberService.findMember(memberId);
        Board verifiedBoard = verifyBoard(boardId);
        verifiedBoard.setStatus(Board.Status.POST_INACTIVE);
    }



    //---------------------------------------




    @Transactional(readOnly = true)
    public Board verifyBoard(Long boardId) {
        Optional<Board> optionalBoard = boardRepository.findById(boardId);
        Board findedBoard =
                optionalBoard.orElseThrow(() -> new BusinessLogicException(ExceptionCode.POST_NOT_EXIST));
        return findedBoard;
    }



    public void increaseViews(Board board) {
        board.setView(board.getView() + 1);
        boardRepository.save(board);
    }


    @Transactional(readOnly = true)
    public List<Comment> verifyComment(Long boardId) {
        Optional<List<Comment>> optionalComments = commentRepository.findCommentsByBoardId(boardId);
        List<Comment> foundComments =
                optionalComments.orElseThrow(() -> new BusinessLogicException(ExceptionCode.COMMENT_NOT_EXIST));
        return foundComments;
    }

    // 7.리프레시 토큰
//        public Long findMemberId(String token) {
//        Optional<RefreshToken> refreshToken = refreshTokenRepository.findByValue(token);
//        RefreshToken foundToken = refreshToken.orElseThrow(() -> new BusinessLogicException(ExceptionCode.EMAIL_NOT_EXIST));
//        return foundToken.getMemberId();
//    }
}
