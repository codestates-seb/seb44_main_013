package com.portfolly.server.board.entity;

import com.portfolly.server.board.comment.entity.RecComment;
import com.portfolly.server.member.entity.Member;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class RecBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;
    private Long view;
    private Status status;

    public enum Status{

    }
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "recBoard", fetch = FetchType.EAGER)
    private List<RecComment> recComments = new ArrayList<>();

}
