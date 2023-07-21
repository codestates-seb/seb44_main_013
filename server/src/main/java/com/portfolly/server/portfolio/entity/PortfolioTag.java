package com.portfolly.server.portfolio.entity;

import com.portfolly.server.category.entity.Category;
import com.portfolly.server.category.entity.Tag;

import javax.persistence.*;

@Entity
public class PortfolioTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "tag_id")
    private Tag tag;
    @ManyToOne
    @JoinColumn(name = "portfolio_id")
    private Portfolio portfolio;
}