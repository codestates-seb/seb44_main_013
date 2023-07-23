package com.portfolly.server.board.dto;


import lombok.*;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BoardMemberInfo {
    private Long memberId;
    private String name;
}
