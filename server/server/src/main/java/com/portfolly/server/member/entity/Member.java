package com.portfolly.server.member.entity;

import com.portfolly.server.board.comment.entity.CopComment;
import com.portfolly.server.board.comment.entity.RecComment;
import com.portfolly.server.board.entity.CopBoard;
import com.portfolly.server.board.entity.RecBoard;
import com.portfolly.server.bookmark.Bookmark;
import com.portfolly.server.portfolio.entity.Portfolio;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity

public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String member_role;
    //이미지
    private String location;
    private String comInfo;
    private String job;
    private String career;
    private String award;
    private String skill;
    private Status status;

    public enum Status{

    }
    @OneToMany(mappedBy = "member", fetch = FetchType.LAZY)
    private List<Portfolio> portfolios = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<RecBoard> recBoards = new ArrayList<>();
    @OneToMany(mappedBy = "member")
    private List<CopBoard> copBoards = new ArrayList<>();
    @OneToMany(mappedBy = "member")
    private List<RecComment> recComments = new ArrayList<>();
    @OneToMany(mappedBy = "member")
    private List<CopComment> copComments = new ArrayList<>();
    @OneToMany(mappedBy = "member")
    private List<Bookmark> bookmarks = new ArrayList<>();
}
