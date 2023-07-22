package com.portfolly.server.picture.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.portfolly.server.portfolio.entity.Portfolio;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Picture {
    @Id
    @GeneratedValue
    private Long id;
    private String fileName;
    private String pictureUrl;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "portfolio_id")
    private Portfolio portfolio;

}
