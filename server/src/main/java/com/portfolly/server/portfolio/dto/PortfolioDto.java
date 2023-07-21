package com.portfolly.server.portfolio.dto;

import com.portfolly.server.category.dto.CategoryDto;
import com.portfolly.server.likes.entity.Likes;
import com.portfolly.server.member.dto.MemberDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.mapstruct.Mapper;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

public class PortfolioDto {
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post{
        @NotBlank(message = "제목을 입력하세요")
        @Size(min = 1, max = 30, message = "제목은 최대 30자까지 작성할 수 있습니다.")
        private String title;
        @NotBlank(message = "내용을 입력하세요")
        @Size(min = 1, max = 5000)
        private String content;
        @NotBlank(message = "설명을 입력하세요")
        @Size(min = 1, max = 300, message = "요약 설명은 최대 300자까지 작성할 수 있습니다.")
        private String explains;
        private String category;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Patch{
        private Long id;
        @NotBlank(message = "제목을 입력하세요")
        @Size(min = 1, max = 30, message = "제목은 최대 30자까지 작성할 수 있습니다.")
        private String title;
        @NotBlank(message = "내용을 입력하세요")
        private String content;
        @NotBlank(message = "설명을 입력하세요")
        @Size(min = 1, max = 300, message = "요약 설명은 최대 300자까지 작성할 수 있습니다.")
        private String explains;
        private String category;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response{
        private Long id;
        private String title;
        private String content;
        private String explains;
        private Long view;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private CategoryDto.Response category;
        private boolean isLiked;
        private boolean isMarked;
        private boolean isWriter;
        private int countLikes;
        private String firstImage;
        private MemberDto.Partner_Response member;
//        private List<TagDto.Response> tags;
//        private List<LikesDto.Response> likes;
//        private List<BookmarkDto.Response> bookmarks;

    }


}
