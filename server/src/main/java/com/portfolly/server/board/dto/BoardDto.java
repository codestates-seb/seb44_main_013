package com.portfolly.server.board.dto;

import com.portfolly.server.board.entity.Board;
import com.portfolly.server.comment.dto.CommentDto;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
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

        // 게시판 구분 : [COOPERATION, RECRUITMENT]
        @NotNull(message = "구분은 공백이 아니어야 합니다.")
        private Board.Division division;
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
        private Board.Division division;
        private Board.Status status;
        private Long view;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private BoardMemberInfo memberInfo;
        private List<CommentDto.Response> comments;

    }

    // 게시글 전체 조회 응답
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ResponseList {
        private Long id;
        private String title;
        private String content;
        private Board.Division division;
        private Board.Status status;
        private Long view;
        private BoardMemberInfo memberInfo;
    }


}
