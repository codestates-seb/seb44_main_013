package com.portfolly.server.board.service;


import com.portfolly.server.board.dto.BoardDto;
import com.portfolly.server.board.dto.BoardMemberInfo;
import com.portfolly.server.board.entity.Board;
import com.portfolly.server.board.mapper.BoardMapper;
import com.portfolly.server.board.respository.BoardRepository;
import com.portfolly.server.comment.dto.CommentDto;
import com.portfolly.server.comment.dto.CommentMemberInfo;
import com.portfolly.server.comment.entity.Comment;
import com.portfolly.server.comment.mapper.CommentMapper;
import com.portfolly.server.comment.respository.CommentRepository;
import com.portfolly.server.exception.businessLogicException.BusinessLogicException;
import com.portfolly.server.exception.businessLogicException.ExceptionCode;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.yaml.snakeyaml.tokens.CommentToken;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;
    private final CommentRepository commentRepository;
    private final MemberService memberService;
    private final BoardMapper boardMapper;
    private final CommentMapper commentMapper;


    private BoardDto.Response createResponse(Board board) {
        BoardDto.Response boardResponse = boardMapper.boardToBoardResponse(board);
        boardResponse.setMemberInfo(BoardMemberInfo.builder()
                .memberId(board.getMember().getId())
                .name(board.getMember().getName())
                .build());
        return boardResponse;
    }


    private List<BoardDto.ResponseList> createResponseList(List<Board> boards) {
        List<BoardDto.ResponseList> responseList = boardMapper.boardsToBoardResponseList(boards);
        for (int i = 0; i < boards.size(); i++) {
            Board board = boards.get(i);
            BoardMemberInfo memberInfo = BoardMemberInfo.builder()
                    .memberId(board.getMember().getId())
                    .name(board.getMember().getName())
                    .build();
            responseList.get(i).setMemberInfo(memberInfo);
        }
        return responseList;
    }

    private CommentDto.Response createCommentResponse(Comment comment) {
        CommentDto.Response commentResponse = commentMapper.commentToResponse(comment);
        commentResponse.setMemberInfo(CommentMemberInfo.builder()
                .memberId(comment.getMember().getId())
                .name(comment.getMember().getName())
                .build());
        return commentResponse;
    }

    //----------------------------------------------------

    @Transactional
    public Board createBoard(Board board, Long memberId) {
        Member member = memberService.findByMember(memberId);
        board.setMember(member);
        return boardRepository.save(board);
    }


    @Transactional
    public BoardDto.Response updateBoard(Board board, Long memberId) {

        Board verifiedBoard = verifyBoard(board.getId());         // 2차 검증 : 게시글 존재여부
        verifyWriter(verifiedBoard, memberId);                    // 3차 검증 : 게시글 작성자 확인
        Member member = memberService.findByMember(memberId);
        verifiedBoard.setMember(member);

        Optional.ofNullable(board.getTitle())
                .ifPresent(verifiedBoard::setTitle);
        Optional.ofNullable(board.getContent())
                .ifPresent(verifiedBoard::setContent);

        // 댓글의 memberInfo 설정
        List<CommentDto.Response> commentResponses = verifiedBoard.getComments().stream()
                .map(this::createCommentResponse)
                .collect(Collectors.toList());

        BoardDto.Response response = createResponse(verifiedBoard);
        response.setComments(commentResponses);

        return response;
    }



    // 게시글 상세페이지
    @Transactional(readOnly = true)
    public BoardDto.Response findBoard(Long boardId) {
        Board verifiedBoard = verifyBoard(boardId);
        List<Comment> comments = verifyComment(boardId);
        verifiedBoard.setComments(comments);

        // 댓글의 memberInfo 설정
        List<CommentDto.Response> commentResponses = comments.stream()
                .map(this::createCommentResponse)
                .collect(Collectors.toList());

        BoardDto.Response response = createResponse(verifiedBoard);
        response.setComments(commentResponses);

        return response;
    }


    @Transactional(readOnly = true)
    public List<BoardDto.ResponseList> findBoards(Board.Division division) {
        List<Board> boards = boardRepository.findBoardByDivision(division);

        return createResponseList(boards);
    }



    @Transactional(readOnly = true)
    public List<BoardDto.ResponseList> findPages(int page, int size, Board.Division division) {
        List<Board> boardByDivision = boardRepository.findBoardByDivision(division);
        Page<Board> pages = boardRepository.findAll(PageRequest.of(page, size));
        List<Board> boards = pages.getContent();

        return createResponseList(boards);
    }


    @Transactional
    public void deleteBoard(Long boardId, Long memberId) {
        Board verifiedBoard = verifyBoard(boardId);                       // 2차 검증 : 게시글 존재여부
        verifyWriter(boardRepository.findById(boardId).get(), memberId);  // 3차 검증 : 게시글 작성자 확인

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

    // 게시글 작성자 확인
    @Transactional(readOnly = true)
    public void verifyWriter(Board board, Long memberId) {
        Board foudnBoard = boardRepository.findById(board.getId()).get();
        Long foundMemberId = foudnBoard.getMember().getId();
        if(!foundMemberId.equals(memberId)) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_MATCH);
        }
    }

    // 리프레시 토큰
//        public Long findMemberId(String token) {
//        Optional<RefreshToken> refreshToken = refreshTokenRepository.findByValue(token);
//        RefreshToken foundToken = refreshToken.orElseThrow(() -> new BusinessLogicException(ExceptionCode.EMAIL_NOT_EXIST));
//        return foundToken.getMemberId();
//    }

}
