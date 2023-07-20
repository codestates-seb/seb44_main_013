package com.portfolly.server.board.controller;

import com.portfolly.server.board.dto.BoardDto;
import com.portfolly.server.board.entity.Board;
import com.portfolly.server.board.mapper.BoardMapper;
import com.portfolly.server.board.service.BoardService;
import com.portfolly.server.comment.entity.Comment;
import com.portfolly.server.comment.service.CommentService;
import com.portfolly.server.dto.MultiResponseDto;
import com.portfolly.server.exception.businessLogicException.BusinessLogicException;
import com.portfolly.server.exception.businessLogicException.ExceptionCode;
import com.portfolly.server.security.authorization.jwt.JwtTokenizer;
import com.portfolly.server.security.authorization.utils.CustomAuthorityUtils;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.annotation.PostConstruct;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;
import java.util.Optional;




@Slf4j
@Validated
@RequestMapping("/boards")
@RequiredArgsConstructor
@RestController
public class BoardController {

    private final BoardMapper mapper;
    private final BoardService boardService;
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils customAuthorityUtils;


    @PostConstruct
    public void postConstruct() {

        Board board1 = new Board("제목 테스트1", "본문 테스트1", Board.Division.RECRUITMENT);
        Board board2 = new Board("제목 테스트2", "본문 테스트2", Board.Division.RECRUITMENT);
        Board board3 = new Board("제목 테스트3", "본문 테스트3", Board.Division.RECRUITMENT);
        Board board4 = new Board("제목 테스트4", "본문 테스트4", Board.Division.RECRUITMENT);
        Board board5 = new Board("제목 테스트5", "본문 테스트5", Board.Division.RECRUITMENT);
        Board board6 = new Board("제목 테스트6", "본문 테스트6", Board.Division.RECRUITMENT);
        Board board7 = new Board("제목 테스트7", "본문 테스트7", Board.Division.RECRUITMENT);
        Board board8 = new Board("제목 테스트8", "본문 테스트8", Board.Division.RECRUITMENT);
        Board board9 = new Board("제목 테스트9", "본문 테스트9", Board.Division.RECRUITMENT);
        Board board10 = new Board("제목 테스트10", "본문 테스트10", Board.Division.RECRUITMENT);
        Board board11 = new Board("제목 테스트11", "본문 테스트11", Board.Division.RECRUITMENT);
        Board board12 = new Board("제목 테스트12", "본문 테스트12", Board.Division.RECRUITMENT);
        Board board13 = new Board("제목 테스트13", "본문 테스트13", Board.Division.RECRUITMENT);
        Board board14 = new Board("제목 테스트14", "본문 테스트14", Board.Division.RECRUITMENT);
        Board board15 = new Board("제목 테스트15", "본문 테스트15", Board.Division.RECRUITMENT);
        Board board16 = new Board("제목 테스트16", "본문 테스트16", Board.Division.RECRUITMENT);
        Board board17 = new Board("제목 테스트17", "본문 테스트17", Board.Division.RECRUITMENT);
        Board board18 = new Board("제목 테스트18", "본문 테스트18", Board.Division.RECRUITMENT);
        Board board19 = new Board("제목 테스트19", "본문 테스트19", Board.Division.RECRUITMENT);
        Board board20 = new Board("제목 테스트20", "본문 테스트20", Board.Division.RECRUITMENT);

        boardService.createBoard(board1);
        boardService.createBoard(board2);
        boardService.createBoard(board3);
        boardService.createBoard(board4);
        boardService.createBoard(board5);
        boardService.createBoard(board6);
        boardService.createBoard(board7);
        boardService.createBoard(board8);
        boardService.createBoard(board9);
        boardService.createBoard(board10);
        boardService.createBoard(board11);
        boardService.createBoard(board12);
        boardService.createBoard(board13);
        boardService.createBoard(board14);
        boardService.createBoard(board15);
        boardService.createBoard(board16);
        boardService.createBoard(board17);
        boardService.createBoard(board18);
        boardService.createBoard(board19);
        boardService.createBoard(board20);
    }

    @PostMapping("/write")
    public ResponseEntity postBoard(@Valid @RequestBody BoardDto.Post post
                                    //, @RequestHeader("Authorization") String googleAccessToken
                                    ) {

        // Long memberId = boardService.findMemberId(token);

        Board board = mapper.boardPostToBoard(post);
        Board createdBoard = boardService.createBoard(board
                //, memberId
                );

        URI location = UriComponentsBuilder
                .newInstance()
                .path("/boards/{board-id}")
                .buildAndExpand(board.getId())
                .toUri();

        return ResponseEntity.created(location).body("게시물 작성 완료");
    }



    @PatchMapping("/edit/{board-id}")
    public ResponseEntity patchBoard(@PathVariable("board-id") @Positive Long boardId,
                                     @Valid @RequestBody BoardDto.Patch patch
                                     //, @RequestHeader(name ="Refresh") String token
    ) {

        // Long memberId = boardService.findMemberId(token);

        patch.setId(boardId);
        Board board = boardService.updateBoard(mapper.bardPatchToBoard(patch));
        return new ResponseEntity<>(mapper.boardToBoardResponse(board), HttpStatus.OK);
    }


    @GetMapping("/{board-id}")
    public ResponseEntity getBoard(@PathVariable("board-id") @Positive Long boardId) {

        Board board = boardService.verifyBoard(boardId);
        boardService.increaseViews(board);
       // List<Comment> comments = commentService.getComments();

        return new ResponseEntity(mapper.boardToBoardResponse(board), HttpStatus.OK);
       // return new ResponseEntity<>(
       //         new MultiDto(mapper.boardToBoardResponse(board), comments), HttpStatus.OK);
    }


    @GetMapping
    public ResponseEntity getBoards(@Valid @RequestParam Board.Division division) {
        List<Board> boards = boardService.findBoards(division);
        return new ResponseEntity(mapper.boardsToBoardResponseList(boards), HttpStatus.OK);
    }

    // 게시글 페이지 조회
    // [ ver1 ]
//    @GetMapping("/pages")
//    public ResponseEntity getPages(@Positive @RequestParam int page,
//                                   @Positive @RequestParam int size,
//                                   @RequestParam Board.Division division) {
//        Page<Board> pages = boardService.findPages(page-1, size, division);
//        List<Board> boards = pages.getContent();
//
//        return new ResponseEntity((mapper.boardsToBoardResponseList(boards)), HttpStatus.OK);
//    }

    // [ ver2 ]
    @GetMapping("/pages")
    public ResponseEntity getPages(@Positive @RequestParam(defaultValue = "1") int page,
                                   @Positive @RequestParam(defaultValue = "8") int size,
                                   @RequestParam Board.Division division) {
        Page<Board> pages = boardService.findPages(page - 1, size, division);
        List<Board> boards = pages.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.boardsToBoardResponseList(boards), pages), HttpStatus.OK);
    }


    @DeleteMapping("/{board-id}")
    public ResponseEntity deleteBoard(@PathVariable("board-id") @Positive Long boardId
                                      //, @RequestHear(name = "Refresh") String token
                                      ) {

        // Long memberId = boardService.findMemberId(token)

        boardService.deleteBoard(boardId
                //, memberId
                );
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
