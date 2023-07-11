package com.portfolly.server.member.dto;

import com.portfolly.server.audit.Auditable;
import com.portfolly.server.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;

import javax.persistence.Column;
import java.time.LocalDateTime;

public class MemberDto {
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post {
        private String name;
        private String email;
        private Member.Member_Role member_role;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Patch {
        private Long id;
        private String name;
//        private String image_url;
        private String location;
        private String comInfo;
        private String job;
        private String career;
        private String award;
        private String skill;
        private Member.Member_Status memberStatus;

    }
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Client_Response {
        private Long id;
        private String name;
        private Member.Member_Role member_role;
//        private String image_url;
        private String location;
        private String comInfo;
        private Member.Member_Status memberStatus;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Partner_Response {
        private Long id;
        private String name;
        private Member.Member_Role member_role;
//        private String image_url;
        private String location;
        private String job;
        private String career;
        private String award;
        private String skill;
        private Member.Member_Status memberStatus;
    }

}
