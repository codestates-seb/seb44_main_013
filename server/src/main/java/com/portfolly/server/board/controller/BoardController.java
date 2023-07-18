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




    @PostConstruct
    public void postConstruct() {

        Board board1 = new Board("제목 테스트1", "본문 테스트1", Board.Division.RECRUITMENT);
        Board board2 = new Board("제목 테스트2", "본문 테스트2", Board.Division.RECRUITMENT);
        Board board3 = new Board("제목 테스트3", "본문 테스트3", Board.Division.COOPERATION);
        Board board4 = new Board("제목 테스트4", "본문 테스트4", Board.Division.COOPERATION);

        boardService.createBoard(board1);
        boardService.createBoard(board2);
        boardService.createBoard(board3);
        boardService.createBoard(board4);
    }

    @PostMapping("/write")
    public ResponseEntity postBoard(@Valid @RequestBody BoardDto.Post post
                                    //, @RequestHeader(name ="Refresh") String token
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
