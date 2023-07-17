package com.portfolly.server.board.dto;

import com.portfolly.server.comment.entity.Comment;
import lombok.*;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

public class BoardDto {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post {

        @NotBlank(message = "제목은 공백이 아니어야 합니다.")
        private String title;

        @NotBlank(message = "내용은 공백이 아니어야 합니다.")
        private String content;
    }
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Patch {

        private Long id;

        @NotBlank(message = "제목은 공백이 아니어야 합니다.")
        private String title;

        @NotBlank(message = "내용은 공백이 아니어야 합니다.")
        private String content;
    }

    // 게시글 상세 조회 응답
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response {
        private Long id;
        private String title;
        private String content;
        private Long memberId;
        private String name;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private String division;
        private Long view;
        private List<Comment> Comments;
    }

    // 게시글 전체 조회 응답
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ResponseList {
        private String title;
        private String content;
        private Long memberId;
        private String name;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private String division;
        private Long view;
    }


}
