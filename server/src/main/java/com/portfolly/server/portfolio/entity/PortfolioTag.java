package com.portfolly.server.portfolio.entity;

import com.portfolly.server.category.entity.Category;
import com.portfolly.server.category.entity.Tag;
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
    @JoinColumn(name = "tag_id")
    private Tag tag;
    @ManyToOne
    @JoinColumn(name = "portfolio_id")
    private Portfolio portfolio;
}