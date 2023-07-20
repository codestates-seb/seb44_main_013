package com.portfolly.server.bookmark.dto;

import com.portfolly.server.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class BookmarkDto {
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response{
        private Long id;
        private Member member;
        private Portfolio
    }
}
