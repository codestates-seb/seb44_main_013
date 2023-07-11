package com.portfolly.server.portfolio.mapper;

import com.portfolly.server.portfolio.dto.PortfolioDto;
import com.portfolly.server.portfolio.entity.Portfolio;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PortfolioMapper {
    Portfolio postDtoToPortfolio(PortfolioDto.Post postDto);
    Portfolio portfolioToResponseDto(Portfolio portfolio);

}
