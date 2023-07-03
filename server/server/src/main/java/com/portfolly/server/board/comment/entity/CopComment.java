package com.portfolly.server.board.comment.entity;

import com.portfolly.server.board.entity.CopBoard;
import com.portfolly.server.member.entity.Member;

import javax.persistence.*;

@Entity
public class CopComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String content;
    private RecComment.Status status;

    public enum Status{

    }

    @ManyToOne
    @JoinColumn(name = "copBoard_id")
    private CopBoard copBoard;
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;
}
