package com.portfolly.server.member.dto;

import com.portfolly.server.audit.Auditable;
import com.portfolly.server.board.entity.Board;
import com.portfolly.server.bookmark.entity.Bookmark;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.member.image.entity.ImageData;
import com.portfolly.server.portfolio.dto.PortfolioDto;
import com.portfolly.server.portfolio.entity.Portfolio;
import com.portfolly.server.validator.EnumFormat;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.*;
import java.time.LocalDateTime;
import java.util.List;

public class MemberDto {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Auth {
        @Schema(title = "사용자 이름", example = "홍길동")
        @NotEmpty(message = "[필수 입력 항목 입니다] Name")
        @Size(min = 1, max = 20, message = "이름은 1글자 이상 20글자 이하로 작성되어야 합니다.")
        @Pattern(regexp = "^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ\\s]*$", message = "이름에는 특수 문자가 포함될 수 없습니다.")
        private String name;
        @Schema(title = "사용자 email", example = "hong@gmail.com")
        @Email
        private String email;
        private String imageUrl;
    }

    @Getter
    @Setter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    @Schema(title = "사용자 등록 정보")
    public static class Post {
        @Schema(title = "사용자 id", example = "1")
        private Long id;
        @Schema(title = "클라이언트/파트너", example = "Client")
        @EnumFormat(enumClass = Member.Member_Role.class)
        private Member.Member_Role member_role;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Schema(title = "사용자 변경/등록 정보")
    public static class Patch {
        @Schema(title = "사용자 id", example = "1")
        private Long id;
        @Schema(title = "사용자 이름", example = "홍길동")
        @NotEmpty(message = "[필수 입력 항목 입니다] Name")
        @Size(min = 1, max = 20, message = "이름은 1글자 이상 20글자 이하로 작성되어야 합니다.")
        @Pattern(regexp = "^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ\\s]*$", message = "이름에는 특수 문자가 포함될 수 없습니다.")
        private String name;
        @Schema(title = "지역", example = "서울특별시")
        @Pattern(regexp = "^(?:서울특별시|부산광역시|대구광역시|인천광역시|광주광역시|대전광역시|울산광역시|세종특별자치시|"
                + "경기도|강원도|충청북도|충청남도|전라북도|전라남도|경상북도|경상남도|제주특별자치도)$",
                message = "올바른 '도' 형식이 아닙니다.")
        private String location;
        @Schema(title = "회사 정보", example = "[회사 소개]")
        private String comInfo;
        @Schema(title = "직업", example = "개발자")
        @Pattern(regexp = "^[가-힣a-zA-Z\\s]+$", message = "올바른 형식이 아닙니다.")
        private String job;
        @Schema(title = "경력", example = "3년")
        private String career;
        @Schema(title = "수상경력", example = "국내 프로그래머스 1위")
        private String award;
        @Schema(title = "스킬", example = "[작업 스킬 작성]")
        private String skill;
        @Schema(title = "회원 상태", example = "활동중")
        private Member.Member_Status memberStatus;

    }
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Schema(title = "[클라이언트]사용자 정보 조회")
    public static class Client_Response {
        @Schema(title = "사용자 id", example = "1")
        private Long id;
        @Schema(title = "사용자 이름", example = "홍길동")
        @NotEmpty(message = "[필수 입력 항목 입니다] Name")
        @Size(min = 1, max = 20, message = "이름은 1글자 이상 20글자 이하로 작성되어야 합니다.")
        @Pattern(regexp = "^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ\\s]*$", message = "이름에는 특수 문자가 포함될 수 없습니다.")
        private String name;
        @Schema(title = "사용자 email", example = "hong@gmail.com")
        @Email
        private String email;
        @Schema(title = "클라이언트/파트너", example = "Client")
        @EnumFormat(enumClass = Member.Member_Role.class)
        private Member.Member_Role member_role;
        @Schema(title = "지역", example = "서울")
        @Pattern(regexp = "^[가-힣a-zA-Z\\s]+$", message = "올바른 형식이 아닙니다.")
        private String location;
        @Schema(title = "회사 정보", example = "[회사 소개]")
        private String comInfo;
        @Schema(title = "회원 상태", example = "활동중")
        private Member.Member_Status memberStatus;
        private List<Bookmark> bookmarks; // 클라이언트의 경우는 포트폴리오를 올리지 않기때문에 마이페이지 조회시 해당사항없음
        private List<Board> boards;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Schema(title = "[파트너]사용자 정보 조회")
    public static class Partner_Response {
        @Schema(title = "사용자 id", example = "1")
        private Long id;
        @Schema(title = "사용자 이름", example = "홍길동")
        @NotEmpty(message = "[필수 입력 항목 입니다] Name")
        @Size(min = 1, max = 20, message = "이름은 1글자 이상 20글자 이하로 작성되어야 합니다.")
        @Pattern(regexp = "^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ\\s]*$", message = "이름에는 특수 문자가 포함될 수 없습니다.")
        private String name;
        @Schema(title = "사용자 email", example = "hong@gmail.com")
        @Email
        private String email;
        @Schema(title = "클라이언트/파트너", example = "Partner")
        @EnumFormat(enumClass = Member.Member_Role.class)
        private Member.Member_Role member_role;
        @Schema(title = "지역", example = "서울")
        @Pattern(regexp = "^[가-힣a-zA-Z\\s]+$", message = "올바른 형식이 아닙니다.")
        private String location;
        @Schema(title = "직업", example = "개발자")
        @Pattern(regexp = "^[가-힣a-zA-Z\\s]+$", message = "올바른 형식이 아닙니다.")
        private String job;
        @Schema(title = "경력", example = "3년")
        private String career;
        @Schema(title = "수상경력", example = "국내 프로그래머스 1위")
        private String award;
        @Schema(title = "스킬", example = "[작업 스킬 작성]")
        private String skill;
        @Schema(title = "회원 상태", example = "활동중")
        private Member.Member_Status memberStatus;
        private List<Portfolio> portfolios;
        //private List<PortfolioDto.MyPageResponse> portfolios;
        //이것으로 사용하시면 됩니다! Mapper 수정해야함
        private List<Bookmark> bookmarks;
        private List<Board> boards;
    }
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response{
        private Long id;
        private String name;
        private String email;
        private Member.Member_Role member_role;
//        private String imageData;
    }
}
