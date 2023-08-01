package com.portfolly.server.like.entity;

import com.portfolly.server.member.entity.Member;
import com.portfolly.server.portfolio.entity.Portfolio;

import javax.persistence.*;

@Entity
public class Like {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private boolean status;

    @ManyToOne
    @JoinColumn(name = "portfolio_id")
    private Portfolio portfolio;
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;
}
