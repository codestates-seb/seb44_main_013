package com.portfolly.server.category.dto;

import lombok.Getter;

import java.time.LocalDateTime;

public class CategoryDto {
    @Getter
    public static class Response {
        private Long categoryId;
        private String name;
    }

    @Getter
    public static class TagResponse {
        private Long portfolioId;
        private String title;
        private String content;
//        private LocalDateTime createdAt;
//        private LocalDateTime modifiedAt;
//        private MemberDto.Response member;
//        private List<TagDto.Response> tags;
    }
}
