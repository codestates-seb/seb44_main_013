package com.portfolly.server.board.entity;

import com.portfolly.server.board.comment.entity.CopComment;
import com.portfolly.server.member.entity.Member;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class CopBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;
    private Long view;
    private RecBoard.Status status;

    public enum Status{

    }

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "copBoard", fetch = FetchType.EAGER)
    private List<CopComment> copComments = new ArrayList<>();
}
