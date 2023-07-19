package com.portfolly.server.picture.entity;

import com.portfolly.server.portfolio.entity.Portfolio;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Getter
@Setter
public class Picture {
    @Id
    private Long id;
    private String fileName;
    private String pictureUrl;

    @ManyToOne
    @JoinColumn(name = "portfolio_id")
    private Portfolio portfolio;

}
