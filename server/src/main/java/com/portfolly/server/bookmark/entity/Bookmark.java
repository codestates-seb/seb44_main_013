package com.portfolly.server.bookmark.entity;

import com.portfolly.server.member.entity.Member;
import com.portfolly.server.portfolio.entity.Portfolio;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class Bookmark {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
//    private boolean status;
    @ManyToOne
    @JoinColumn(name = "portfolio_id")
    private Portfolio portfolio;
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @Builder
    public Bookmark(Long id, Portfolio portfolio, Member member) {
        this.id = id;
        this.portfolio = portfolio;
        this.member = member;
    }
}
