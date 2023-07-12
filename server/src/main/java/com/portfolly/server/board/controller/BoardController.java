package com.portfolly.server.board.controller;

import com.portfolly.server.board.dto.BoardDto;
import com.portfolly.server.board.entity.Board;
import com.portfolly.server.board.mapper.BoardMapper;
import com.portfolly.server.board.service.BoardService;
import com.portfolly.server.dto.MultiResponseDto;
import com.portfolly.server.member.mapper.MemberMapper;
import com.portfolly.server.member.service.MemberService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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

@Slf4j
@RestController
@Validated
@RequestMapping("/boards")
@AllArgsConstructor
public class BoardController {
    private final BoardService boardService;
    private final BoardMapper mapper;

    @PostConstruct
    public void postConstruct() {

        Board board1 = new Board("제목 테스트1", "본문 테스트1");
        Board board2 = new Board("제목 테스트2", "본문 테스트2");

        boardService.createBoard(board1);
        boardService.createBoard(board2);
    }

    // 1. 게시물 작성
    @PostMapping("/write")
    public ResponseEntity postBoard(@Valid @RequestBody BoardDto.Post post) {

        // todo : 회원ID 인증하기

        Board board = mapper.boardPostToBoard(post);
        Board createdBoard = boardService.createBoard(board);

        URI location = UriComponentsBuilder
                .newInstance()
                .path("/boards/{board-id}")
                .buildAndExpand(board.getId())
                .toUri();

        return ResponseEntity.created(location).body("게시물 작성 완료");
    }

    // 2. 게시물 수정
    @PatchMapping("/edit/{board-id}")
    public ResponseEntity patchBoard(@PathVariable("board-id") @Positive Long boardId,
                                     @Valid @RequestBody BoardDto.Patch patch) {
        patch.setId(boardId);
        Board board = boardService.updateBoard(mapper.bardPatchToBoard(patch));
        return new ResponseEntity<>(mapper.boardToBoardResponse(board), HttpStatus.OK);
    }

    // 3-1. 상세 게시물 조회 & 조회수 증가
    @GetMapping("/{board-id}")
    public ResponseEntity getBoard(@PathVariable("board-id") @Positive Long boardId) {
        Board board = boardService.findVerifiedBoard(boardId);
        boardService.increaseViews(board);

        return new ResponseEntity(mapper.boardToBoardResponse(board), HttpStatus.OK);

    }

    // 3-2. 전제 게시물 조회 (페이지네이션)
    @GetMapping
    public ResponseEntity getBoards(@Positive @RequestParam int page,
                                    @Positive @RequestParam int size) {
        Page<Board> pages = boardService.pageBoards(page - 1, size);
        List<Board> boards = pages.getContent();

        return ResponseEntity.ok(new MultiResponseDto(mapper.boardsToBoardResponseList(boards), pages));

    }

    // 4. 게시글 삭제
    @DeleteMapping("/{board-id}")
    public ResponseEntity deleteBoard(@PathVariable("board-id") @Positive Long boardId) {
        boardService.deleteBoard(boardId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
