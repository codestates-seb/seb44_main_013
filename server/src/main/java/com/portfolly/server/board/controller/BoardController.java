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
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.member.service.MemberService;
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
@CrossOrigin("*")
public class BoardController {
    private final BoardMapper mapper;
    private final BoardService boardService;
    private final MemberService memberService;
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;


    @PostMapping("/write")
    public ResponseEntity postBoard(@RequestHeader("Authorization") String token,
                                    @Valid @RequestBody BoardDto.Post post) {

        String accessToken = token.substring(7);
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        String email = jwtTokenizer.extractEmailFromToken(accessToken, base64EncodedSecretKey);
        Member member = memberService.findByMember(email);    // 1차 검증 : 유효한 멤버(이메일 검증)
        Long memberId = member.getId();

        // 보드 내용 등록
        Board board = mapper.boardPostToBoard(post);
        Board createdBoard = boardService.createBoard(board, memberId);

        URI location = UriComponentsBuilder
                .newInstance()
                .path("/boards/{board-id}")
                .buildAndExpand(board.getId())
                .toUri();

        return ResponseEntity.created(location).body("게시물 작성 완료");
    }



    @PatchMapping("/edit/{board-id}")
    public ResponseEntity patchBoard(@RequestHeader("Authorization") String token,
                                     @PathVariable("board-id") @Positive Long boardId,
                                     @Valid @RequestBody BoardDto.Patch patch) {

        String accessToken = token.substring(7);
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        String email = jwtTokenizer.extractEmailFromToken(accessToken, base64EncodedSecretKey);
        Member member = memberService.findByMember(email);  // 1차 검증 : 유효한 멤버(이메일 검증)
        Long memberId = member.getId();

        patch.setId(boardId);
        Board board = mapper.boardPatchToBoard(patch);
        BoardDto.Response response = boardService.updateBoard(board, memberId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }


    @GetMapping("/{board-id}")
    public ResponseEntity getBoard(@PathVariable("board-id") @Positive Long boardId) {

        Board board = boardService.verifyBoard(boardId);
        boardService.increaseViews(board);
        BoardDto.Response response = boardService.findBoard(boardId);

        return new ResponseEntity(response, HttpStatus.OK);
    }


    @GetMapping
    public ResponseEntity getBoards(@Valid @RequestParam Board.Division division) {
        List<BoardDto.ResponseList> boards = boardService.findBoards(division);
        return new ResponseEntity(boards, HttpStatus.OK);
    }




    @GetMapping("/pages")
    public ResponseEntity getPages(@Positive @RequestParam(defaultValue = "1") int page,
                                   @Positive @RequestParam(defaultValue = "8") int size,
                                   @RequestParam Board.Division division) {
        Page<BoardDto.ResponseList> pages = boardService.findPages(page - 1, size, division);
        List<BoardDto.ResponseList> content = pages.getContent();
//        return new ResponseEntity<>(pages, HttpStatus.OK);
        return new ResponseEntity<>( new MultiResponseDto<>(content, pages), HttpStatus.OK);
    }

//    @GetMapping("/pages")
//    public ResponseEntity getPages(@Positive @RequestParam(defaultValue = "1") int page,
//                                   @Positive @RequestParam(defaultValue = "8") int size,
//                                   @RequestParam Board.Division division) {
//        Page<Board> pages = boardService.findPages(page - 1, size, division);
//        List<Board> boards = pages.getContent();
//
//        return new ResponseEntity<>(
//                new MultiResponseDto<>(mapper.boardsToBoardResponseList(boards), pages), HttpStatus.OK);
//    }


    @DeleteMapping("/{board-id}")
    public ResponseEntity deleteBoard(@RequestHeader("Authorization") String token,
                                      @PathVariable("board-id") @Positive Long boardId) {

        String accessToken = token.substring(7);
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        String email = jwtTokenizer.extractEmailFromToken(accessToken, base64EncodedSecretKey);
        Member member = memberService.findByMember(email); // 1차 검증 : 유효한 멤버(이메일 검증)
        Long memberId = member.getId();

        boardService.deleteBoard(boardId, memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
