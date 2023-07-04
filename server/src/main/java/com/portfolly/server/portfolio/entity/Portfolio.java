package com.portfolly.server.portfolio.entity;

import com.portfolly.server.bookmark.Bookmark;
import com.portfolly.server.likes.entity.Likes;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.category.entity.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
public class Portfolio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;
    private String explains;
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

    @OneToMany(mappedBy = "portfolio")
    private List<Likes> likes = new ArrayList<>();
    @OneToMany(mappedBy = "portfolio")
    private List<Bookmark> bookmarks = new ArrayList<>();

}
