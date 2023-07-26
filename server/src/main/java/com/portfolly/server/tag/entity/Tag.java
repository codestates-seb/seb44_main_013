package com.portfolly.server.tag.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.portfolly.server.category.entity.Category;
import com.portfolly.server.portfolio.entity.Portfolio;
import com.portfolly.server.portfolio.entity.PortfolioTag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

//    @OneToMany(mappedBy = "portfolioTag")
//    private List<PortfolioTag> portfolioTags = new ArrayList<>();
}
