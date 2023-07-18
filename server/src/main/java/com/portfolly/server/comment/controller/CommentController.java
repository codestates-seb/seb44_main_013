package com.portfolly.server.comment.controller;

import com.portfolly.server.board.controller.BoardController;
import com.portfolly.server.board.entity.Board;
import com.portfolly.server.board.respository.BoardRepository;
import com.portfolly.server.board.service.BoardService;
import com.portfolly.server.comment.dto.CommentDto;
import com.portfolly.server.comment.entity.Comment;
import com.portfolly.server.comment.mapper.CommentMapper;
import com.portfolly.server.comment.service.CommentService;
import com.portfolly.server.member.service.MemberService;
import com.portfolly.server.utils.UriCreator;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@Validated
@RequestMapping("/comments")
@RequiredArgsConstructor
@RestController
public class CommentController {
    private final CommentService commentService;
    private final BoardService boardService;
    private final CommentMapper mapper;
    private final static String COMMENT_DEFAULT_URL = "/COMMENT_DEFAULT_URL";



    @PostMapping()
    public ResponseEntity postComment(@Valid @RequestBody CommentDto.Post post
                                      //, @RequestHeader(name ="Refresh") String token
                                      ) {

        // Long memberId = boardService.findMemberId(token);

        Long boardId = post.getBoardId();
        Comment comment = mapper.postToComment(post);
        Comment createdComment = commentService.creatComment(comment, boardId
                //, memberId
                );

        URI location = UriCreator.createUri(COMMENT_DEFAULT_URL, comment.getId());
        return ResponseEntity.created(location).body("댓글 작성 완료");
    }


    @PatchMapping("/edit/{comment-id}")
    public ResponseEntity patchComment(@Positive @PathVariable("comment-id") Long commentId,
                                       @Valid @RequestBody CommentDto.Patch patch
                                       //, @RequestHeader(name ="Refresh") String token
                                       ) {

        // Long memberId = boardService.findMemberId(token);

        patch.setId(commentId);
        Long boardId = patch.getBoardId();
        Comment comment = mapper.patchToComment(patch);
        Comment updatedComment = commentService.updateComment(comment, boardId
                //, memberId
                );
        return new ResponseEntity<>(mapper.commentToResponse(updatedComment), HttpStatus.OK);
    }

    @GetMapping("/{comment-id}")
    public ResponseEntity getComment(@PathVariable("comment-id") @Positive Long commentId) {
        Comment comment = commentService.verifyComment(commentId);

        return new ResponseEntity(mapper.commentToResponse(comment), HttpStatus.OK);

    }


    @DeleteMapping("/{comment-id}")
    public ResponseEntity deleteComment(@Positive @PathVariable("comment-id") Long commentId
                                        //, @RequestHeader(name ="Refresh") String token
                                         ) {
//        Member verifiedMember = memberService.findMember(memberId);
        commentService.deleteComment(commentId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
