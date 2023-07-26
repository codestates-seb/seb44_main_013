package com.portfolly.server.member.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.portfolly.server.audit.Auditable;
import com.portfolly.server.board.entity.Board;
import com.portfolly.server.bookmark.entity.Bookmark;
import com.portfolly.server.member.image.entity.ImageData;
import com.portfolly.server.portfolio.entity.Portfolio;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDateTime;
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
    @Column(nullable = false, updatable = false, unique = true)
    private String email;
    private String imageUrl;
    @Column(nullable = false)
    @Enumerated(value = EnumType.STRING)
    private Member_Role member_role; // 클라이언트 / 파트너
    @Column(nullable = false , length = 50)
    private String location; // 도 시 군 만 기입
    @Column(nullable = false, length = 1000)
    private String comInfo;
    @Column(nullable = false, length = 1000)
    private String job;
    @Column(nullable = false, length = 1000)
    private String career;
    @Column(nullable = false, length = 1000)
    private String award;
    @Column(nullable = false, length = 1000)
    private String skill;
    @Column(name = "expired_at")
    private LocalDateTime expired_at; // 삭제 만료 날짜
    @Column(nullable = false)
    private String refreshToken;
    @Enumerated(value = EnumType.STRING)
    private Member_Status memberStatus = Member_Status.MEMBER_ACTIVE;
    @JsonManagedReference
    @OneToMany(mappedBy = "member",cascade = {CascadeType.ALL})
    private List<Portfolio> portfolios;
    @JsonManagedReference
    @OneToMany(mappedBy = "member",cascade = {CascadeType.ALL})
    private List<Bookmark> bookmarks;
    @JsonManagedReference
    @OneToMany(mappedBy = "member",cascade = {CascadeType.ALL})
    private List<Board> boards;
    @OneToOne(mappedBy = "member",cascade = {CascadeType.ALL})
    private ImageData imageData;

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
        PARTNER("파트너"),
        NOT_ROLE("역할 없음");


        private String role;
        Member_Role(String role){
            this.role = role;
        }
    }
    public Member(String email){
        this.email = email;
    }
}
