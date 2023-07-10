package com.portfolly.server.board.comment.entity;

import com.portfolly.server.board.entity.Board;
import com.portfolly.server.member.entity.Member;

import javax.persistence.*;

@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String content;
    private Comment.Status status;

    public enum Status{

    }

    @ManyToOne
    @JoinColumn(name = "board_id")
    private Board board;
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;
}
