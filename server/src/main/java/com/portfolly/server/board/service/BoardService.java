package com.portfolly.server.board.service;


import com.portfolly.server.board.dto.BoardDto;
import com.portfolly.server.board.dto.MemberInfo;
import com.portfolly.server.board.entity.Board;
import com.portfolly.server.board.mapper.BoardMapper;
import com.portfolly.server.board.respository.BoardRepository;
import com.portfolly.server.comment.dto.CommentDto;
import com.portfolly.server.comment.entity.Comment;
import com.portfolly.server.comment.mapper.CommentMapper;
import com.portfolly.server.comment.respository.CommentRepository;
import com.portfolly.server.exception.businessLogicException.BusinessLogicException;
import com.portfolly.server.exception.businessLogicException.ExceptionCode;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.member.image.service.StorageService;
import com.portfolly.server.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    private final StorageService storageService;



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

        // 댓글의 CommentMemberInfo 설정
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
        Board verifiedBoard = verifyBoard(boardId); // 2차검증 : 게시글 존재 유무

        // 게시글 필터링
        Board.Status status = verifiedBoard.getStatus();
        Board.Division division = verifiedBoard.getDivision();
        Board fiteredBoard = boardRepository.findBoardByIdAndStatusAndDivision(boardId, Board.Status.POST_ACTIVE, division);

        // todo
        List<Comment> comments = verifyComment(boardId);
        fiteredBoard.setComments(comments);

        // 댓글 MemberInfo 빌드
        List<CommentDto.Response> commentResponses = comments.stream()
                .map(this::createCommentResponse)
                .collect(Collectors.toList());

        // 보드 MemberInfo 빌드 / 댓글 저장
        BoardDto.Response response = createResponse(fiteredBoard);
        response.setComments(commentResponses);

        return response;
    }


    @Transactional(readOnly = true)
    public List<BoardDto.ResponseList> findBoards(Board.Division division) {
        List<Board> boards = boardRepository.findBoardsByStatusAndDivisionOrderByCreatedAtDesc(Board.Status.POST_ACTIVE,division);
        return createResponseList(boards);
    }



    @Transactional(readOnly = true)
    public Page<BoardDto.ResponseList> findPages(int page, int size, Board.Division division) {

        List<Board> boards = boardRepository.findPagesByAndStatusAndDivision(PageRequest.of(page, size, Sort.by("createdAt").descending()), Board.Status.POST_ACTIVE, division);
        List<BoardDto.ResponseList> responseList = createResponseList(boards);

        // Page 객체를 생성하여 리턴
        return new PageImpl<>(responseList, PageRequest.of(page, size), boards.size());
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
        Board foundBoard =
                optionalBoard.orElseThrow(() -> new BusinessLogicException(ExceptionCode.POST_NOT_EXIST));

        if (foundBoard.getStatus() != Board.Status.POST_ACTIVE)
            throw new BusinessLogicException(ExceptionCode.POST_DELETED);

        return foundBoard;
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

    private BoardDto.Response createResponse(Board board) {
        BoardDto.Response boardResponse = boardMapper.boardToBoardResponse(board);
        boardResponse.setMemberInfo(MemberInfo.builder()
                .memberId(board.getMember().getId())
                .name(board.getMember().getName())
                .imageUrl(board.getMember().getImageUrl())
                .build());
        return boardResponse;
    }


    private List<BoardDto.ResponseList> createResponseList(List<Board> boards) {
        List<BoardDto.ResponseList> responseList = boardMapper.boardsToBoardResponseList(boards);
        for (int i = 0; i < boards.size(); i++) {
            Board board = boards.get(i);
            MemberInfo memberInfo = MemberInfo.builder()
                    .memberId(board.getMember().getId())
                    .name(board.getMember().getName())
                    .imageUrl(board.getMember().getImageUrl())
                    .build();
            responseList.get(i).setMemberInfo(memberInfo);
        }
        return responseList;
    }


    private CommentDto.Response createCommentResponse(Comment comment) {
        CommentDto.Response commentResponse = commentMapper.commentToResponse(comment);
        commentResponse.setMemberInfo(MemberInfo.builder()
                .memberId(comment.getMember().getId())
                .name(comment.getMember().getName())
                .imageUrl(comment.getMember().getImageUrl())
                .build());
        return commentResponse;
    }

    // 리프레시 토큰
//        public Long findMemberId(String token) {
//        Optional<RefreshToken> refreshToken = refreshTokenRepository.findByValue(token);
//        RefreshToken foundToken = refreshToken.orElseThrow(() -> new BusinessLogicException(ExceptionCode.EMAIL_NOT_EXIST));
//        return foundToken.getMemberId();
//    }
}
