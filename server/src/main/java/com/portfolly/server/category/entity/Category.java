package com.portfolly.server.category.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.portfolly.server.portfolio.entity.Portfolio;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    public Category(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    //web, app, 3da, graphicDesign, photo


    @OneToMany(mappedBy = "category",fetch = FetchType.LAZY)
    private List<Portfolio> portfolios = new ArrayList<>();
    @OneToMany(mappedBy = "category",fetch = FetchType.EAGER)
    private List<Tag> tags = new ArrayList<>();

}
