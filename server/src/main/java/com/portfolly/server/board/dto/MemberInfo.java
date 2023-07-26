package com.portfolly.server.board.dto;


import com.portfolly.server.member.image.entity.ImageData;
import lombok.*;

import java.awt.*;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberInfo {
    private Long memberId;
    private String name;
    private String imageUrl;
}