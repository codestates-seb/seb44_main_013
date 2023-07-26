package com.portfolly.server.comment.controller;

import com.portfolly.server.comment.dto.CommentDto;
import com.portfolly.server.comment.entity.Comment;
import com.portfolly.server.comment.mapper.CommentMapper;
import com.portfolly.server.comment.service.CommentService;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.member.service.MemberService;
import com.portfolly.server.security.authorization.jwt.JwtTokenizer;
import com.portfolly.server.security.authorization.utils.CustomAuthorityUtils;
import com.portfolly.server.utils.UriCreator;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@Validated
@RequestMapping("/comments")
@RequiredArgsConstructor
@RestController
@CrossOrigin("*")
public class CommentController {
    private final CommentService commentService;
    private final MemberService memberService;
    private final CommentMapper mapper;
    private final static String COMMENT_DEFAULT_URL = "/COMMENT_DEFAULT_URL";
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    // todo : 프로필이미지 가져오기

    @PostMapping()

    public ResponseEntity postComment(@RequestHeader("Authorization") String token,
                                      @Valid @RequestBody CommentDto.Post post) {

        String accessToken = token.substring(7);
        String encodeBase64SecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        String email = jwtTokenizer.extractEmailFromToken(accessToken, encodeBase64SecretKey);
        Member member = memberService.findByMember(email); // 1차 검증 : 유효한 멤버(이메일 검증)
        Long memberId = member.getId();
        Long boardId = post.getBoardId();

        // 댓글 내용 등록
        Comment comment = mapper.postToComment(post);
        CommentDto.Response createdComment = commentService.creatComment(comment, boardId, memberId);

        URI location = UriCreator.createUri(COMMENT_DEFAULT_URL, comment.getId());
        return ResponseEntity.created(location).body("댓글 작성 완료");
    }


    @PatchMapping("/edit/{comment-id}")
    public ResponseEntity patchComment(@RequestHeader("Authorization") String token,
                                       @Positive @PathVariable("comment-id") Long commentId,
                                       @Valid @RequestBody CommentDto.Patch patch) {

        String accessToken = token.substring(7);
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        String email = jwtTokenizer.extractEmailFromToken(accessToken, base64EncodedSecretKey);
        Member member = memberService.findByMember(email); // 1차검증 : 유효한 멤버(이메일 검증)
        Long memberId = member.getId();

        patch.setId(commentId);
        Long boardId = patch.getBoardId();
        Comment comment = mapper.patchToComment(patch);
        CommentDto.Response updatedComment = commentService.updateComment(comment, boardId, memberId);
        return new ResponseEntity<>(updatedComment, HttpStatus.OK);
    }

    @GetMapping("/{comment-id}")
    public ResponseEntity getComment(@PathVariable("comment-id") @Positive Long commentId) {
        CommentDto.Response comment = commentService.getComment(commentId);
        return new ResponseEntity(comment, HttpStatus.OK);

    }


    @DeleteMapping("/{comment-id}")
    public ResponseEntity deleteComment(@RequestHeader("Authorization") String token,
                                        @Positive @PathVariable("comment-id") Long commentId) {

        String accessToken = token.substring(7);
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        String email = jwtTokenizer.extractEmailFromToken(accessToken, base64EncodedSecretKey);
        Member member = memberService.findByMember(email); // 1차 검증 : 유효한 멤버(이메일 검증)
        Long memberId = member.getId();

        commentService.deleteComment(commentId, memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
