package com.portfolly.server.board.service;


import com.portfolly.server.board.entity.Board;
import com.portfolly.server.board.respository.BoardRepository;
import com.portfolly.server.exception.businessLogicException.BusinessLogicException;
import com.portfolly.server.exception.businessLogicException.ExceptionCode;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@AllArgsConstructor
public class BoardService {

    @Autowired
    public final BoardRepository boardRepository;

    // 1. 게시물 작성
    @Transactional
    public Board createBoard(Board board) {
        // todo : 인증된 회원ID 확인
        return boardRepository.save(board);
    }

    // 2. 게시물 수정
    @Transactional
    public Board updateBoard(Board board) {
        Board verifiedBoard = findVerifiedBoard(board.getId());

        Optional.ofNullable(board.getTitle())
                .ifPresent(verifiedBoard::setTitle);
        Optional.ofNullable((board.getContent()))
                .ifPresent(verifiedBoard::setContent);

//        verifiedBoard.setModifiedAt(LocalDateTime.now());
        return verifiedBoard;
    }


    // 3-1. 상세 게시물 조회
    @Transactional(readOnly = true)
    public Board findBoard(Long boardId) {
        Board verifiedBoard = findVerifiedBoard(boardId);
        return boardRepository.save(verifiedBoard);
    }

    // 3-2. 전제 게시물 조회
    @Transactional(readOnly = true)
    public Page<Board> pageBoards(int page, int size) {
        return boardRepository.findAll(PageRequest.of(page, size));
    }

    // 4. 글 삭제
    @Transactional
    public void deleteBoard(Long boardId) {
        Board verifiedBoard = findVerifiedBoard(boardId);
        verifiedBoard.setStatus(Board.Status.POST_INACTIVE);
    }



    // 기타 메서드 ---------------------------------------



    // 5-1. 게시물 존재 유무 확인
    @Transactional(readOnly = true)
    public Board findVerifiedBoard(Long boardId) {
        Optional<Board> optionalBoard = boardRepository.findById(boardId);
        Board findedBoard =
                optionalBoard.orElseThrow(() -> new BusinessLogicException(ExceptionCode.POST_NOT_FOUND));
        return findedBoard;
    }

    // todo : 5-2. 게시글 소유권 확인


    // 6. 조회수 증가
    public void increaseViews(Board board) {
        board.setView(board.getView() + 1);
        boardRepository.save(board);
    }
}
