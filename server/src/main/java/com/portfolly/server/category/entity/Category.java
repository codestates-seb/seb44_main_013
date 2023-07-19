package com.portfolly.server.category.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.portfolly.server.portfolio.entity.Portfolio;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;


    @OneToMany(mappedBy = "category",fetch = FetchType.LAZY)
    private List<Portfolio> portfolios = new ArrayList<>();
    @OneToMany(mappedBy = "category",fetch = FetchType.EAGER)
    private List<Tag> tags = new ArrayList<>();

}
