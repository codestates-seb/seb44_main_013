package com.portfolly.server.portfolio.entity;

import com.portfolly.server.bookmark.Bookmark;
import com.portfolly.server.like.entity.Like;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.category.entity.Category;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Portfolio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;
    private Long view = 0L;
    private PortfolioStatus portfolioStatus;

    public enum PortfolioStatus {

    }

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @OneToMany(mappedBy = "portfolio", fetch = FetchType.EAGER)
    private List<Like> likes = new ArrayList<>();
    @OneToMany(mappedBy = "portfolio", fetch = FetchType.EAGER)
    private List<Bookmark> bookmarks = new ArrayList<>();

}
