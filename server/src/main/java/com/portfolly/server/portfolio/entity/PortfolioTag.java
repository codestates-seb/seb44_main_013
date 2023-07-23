package com.portfolly.server.portfolio.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.portfolly.server.category.entity.Category;
import com.portfolly.server.tag.entity.Tag;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class PortfolioTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "tag_id")
    private Tag tag;
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "portfolio_id")
    private Portfolio portfolio;
}