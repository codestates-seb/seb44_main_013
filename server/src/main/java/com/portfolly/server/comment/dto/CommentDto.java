package com.portfolly.server.comment.dto;

import com.portfolly.server.board.entity.Board;
import com.portfolly.server.comment.entity.Comment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;


public class CommentDto {

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post {

        @NotNull(message = "게시판 ID를 입력해주세요.")
        private Long boardId;

        @NotBlank(message = "내용을 입력해주세요.")
        private String content;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Patch {

        private Long id;

        @NotNull(message = "게시판 ID를 입력해주세요.")
        private Long boardId;

        @NotBlank(message = "내용을 입력해주세요.")
        private String content;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response {
        private Long id;
//        private Long boardId;
        private String content;
        private Comment.Status status;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}



