package com.portfolly.server.member.entity;

import com.portfolly.server.audit.Auditable;
import com.portfolly.server.board.entity.Board;
import com.portfolly.server.bookmark.Bookmark;
import com.portfolly.server.portfolio.entity.Portfolio;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Member extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 20, nullable = false)
    private String name;
    @Column(nullable = false, updatable = false)
    private String email;
    @Column(nullable = false)
    @Enumerated(value = EnumType.STRING)
    private Member_Role member_role; // 클라이언트 / 파트너
//    private String image_url; // member Profile image S3 ? DB
    private String location; // 도 시 군 만 기입
    private String comInfo;
    private String job;
    private String career;
    private String award;
    private String skill;
    @Enumerated(value = EnumType.STRING)
    private Member_Status memberStatus = Member_Status.MEMBER_ACTIVE;
    @OneToMany(mappedBy = "member",cascade = {CascadeType.ALL})
    private List<Portfolio> portfolio_id;
    @OneToMany(mappedBy = "member",cascade = {CascadeType.ALL})
    private List<Bookmark> bookmark_id;
    @OneToMany(mappedBy = "member",cascade = {CascadeType.ALL})
    private List<Board> board_id;

    public enum Member_Status{
        MEMBER_ACTIVE(0,"휴먼 계정"),
        MEMBER_DORMANCY(1,"활동중"),
        MEMBER_DELETE(2,"탈퇴 상태");
        private String status;
        private int status_number;
        Member_Status(int status_number,String status) {
            this.status = status;
            this.status_number = status_number;
        }
    }

    public enum Member_Role{
        CLIENT("클라이언트"),
        PARTNER("파트너");

        private String role;
        Member_Role(String role){
            this.role = role;
        }
    }
    public Member(String email){
        this.email = email;
    }
}
