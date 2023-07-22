package com.portfolly.server.tag.entity;

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
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
//    @ManyToOne
//    @JoinColumn(name = "category_id")
//    private Category category;

//    @OneToMany(mappedBy = "portfolioTag")
//    private List<PortfolioTag> portfolioTags = new ArrayList<>();
}
