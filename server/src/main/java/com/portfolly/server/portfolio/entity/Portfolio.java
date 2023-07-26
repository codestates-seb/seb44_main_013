package com.portfolly.server.portfolio.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.*;
import com.portfolly.server.audit.Auditable;
import com.portfolly.server.bookmark.entity.Bookmark;
import com.portfolly.server.likes.entity.Likes;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.category.entity.Category;
import com.portfolly.server.picture.entity.Picture;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
//@AllArgsConstructor
public class Portfolio extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @Column(length = 5000)
    private String content;
    private String explains;
    private Long view = 0L;
    @Enumerated(EnumType.STRING)
    private Status status;

    public Portfolio(Long id, String title, String content, String explains, Long view, Status status, Member member, Category category) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.explains = explains;
        this.view = view;
        this.status = status = status == null ? status.ACTIVE : status;
        this.member = member;
        this.category = category;
    }

    public enum Status {
        INACTIVE(0, "비공개"),
        ACTIVE(1, "공개"),
        DELETED(2, "삭제");

        int statusNumber;
        String portfolioDescription;
        public String getPortfolioDescription() {
            return portfolioDescription;
        }
        Status(int statusNumber, String portfolioDescription) {
            this.statusNumber = statusNumber;
            this.portfolioDescription = portfolioDescription;
        }
    }

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @OneToMany(mappedBy = "portfolio")
    @JsonManagedReference
    private List<Likes> likes = new ArrayList<>();
    @OneToMany(mappedBy = "portfolio")
    @JsonManagedReference
    private List<Bookmark> bookmarks = new ArrayList<>();
    @OneToMany(mappedBy = "portfolio")
    @JsonManagedReference
    private List<PortfolioTag> portfolioTags = new ArrayList<>();
    @OneToMany(mappedBy = "portfolio")
    @JsonManagedReference
    private List<Picture> pictures = new ArrayList<>();


}
