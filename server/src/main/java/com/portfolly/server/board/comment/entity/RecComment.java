package com.portfolly.server.board.comment.entity;

import com.portfolly.server.board.entity.RecBoard;
import com.portfolly.server.member.entity.Member;

import javax.persistence.*;

@Entity
public class RecComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String content;
    private Status status;

    public enum Status{

    }
    @ManyToOne
    @JoinColumn(name = "recBoard_id")
    private RecBoard recBoard;
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;
}
