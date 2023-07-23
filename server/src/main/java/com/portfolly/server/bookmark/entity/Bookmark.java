package com.portfolly.server.bookmark.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.portfolio.entity.Portfolio;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Bookmark {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonBackReference
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "portfolio_id")
    private Portfolio portfolio;
    @JsonBackReference
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "member_id")
    private Member member;

}
