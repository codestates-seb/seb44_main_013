package com.portfolly.server.likes.entity;

import com.portfolly.server.member.entity.Member;
import com.portfolly.server.portfolio.entity.Portfolio;

import javax.persistence.*;

@Entity
public class Likes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "portfolio_id")
    private Portfolio portfolio;
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;
}
