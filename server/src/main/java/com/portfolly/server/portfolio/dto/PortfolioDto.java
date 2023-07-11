package com.portfolly.server.portfolio.dto;

import com.portfolly.server.likes.entity.Likes;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

public class PortfolioDto {
    @Getter
    @Setter
    public static class Post{
        @NotBlank(message = "제목을 입력하세요")
        @Size(min = 1, max = 30, message = "제목은 최대 30자까지 작성할 수 있습니다.")
        private String title;
        @NotBlank(message = "내용을 입력하세요")
        private String content;
        @NotBlank(message = "설명을 입력하세요")
        @Size(min = 1, max = 300, message = "요약 설명은 최대 300자까지 작성할 수 있습니다.")
        private String explains;
    }

    @Getter
    @Setter
    public static class Patch{
        private Long portfolioId;
        @NotBlank(message = "제목을 입력하세요")
        @Size(min = 1, max = 30, message = "제목은 최대 30자까지 작성할 수 있습니다.")
        private String title;
        @NotBlank(message = "내용을 입력하세요")
        private String content;
        @NotBlank(message = "설명을 입력하세요")
        @Size(min = 1, max = 300, message = "요약 설명은 최대 300자까지 작성할 수 있습니다.")
        private String explains;
    }

    public static class Response{
        private long portfolioId;
        private String title;
        private String content;
        private String explains;
        private long view;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private String category;
        private boolean isLiked;
        private boolean isMarked;
//        private List<TagDto.Response> tags;
//        private MemberDto.Response member;
//        private List<LikesDto.Response> likes;
//        private List<BookmarkDto.Response> bookmarks;

    }
}
