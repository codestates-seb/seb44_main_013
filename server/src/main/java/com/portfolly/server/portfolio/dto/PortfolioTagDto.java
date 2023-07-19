package com.portfolly.server.portfolio.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Positive;

@Getter
@Setter
@NoArgsConstructor
public class PortfolioTagDto {
    @Positive
    private long portfolioTagId;
    @Positive
    private long tagId;
    @Positive
    private long portfolioId;
}
