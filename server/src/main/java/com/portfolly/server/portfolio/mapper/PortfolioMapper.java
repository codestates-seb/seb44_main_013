package com.portfolly.server.portfolio.mapper;

import com.portfolly.server.category.mapper.CategoryMapper;
import com.portfolly.server.member.dto.MemberDto;
import com.portfolly.server.member.mapper.MemberMapper;
import com.portfolly.server.portfolio.dto.PortfolioDto;
import com.portfolly.server.portfolio.entity.Portfolio;
import org.mapstruct.Mapper;
import com.portfolly.server.member.entity.Member;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", uses = {MemberMapper.class, CategoryMapper.class})
public interface PortfolioMapper {
    @Mapping(target = "category", ignore = true)
    Portfolio postDtoToPortfolio(PortfolioDto.Post postDto);
    List<PortfolioDto.Response> portfoliosToResponseDto(List<Portfolio> portfolios);
    PortfolioDto.Response portfolioToResponseDto(Portfolio portfolio);

//    MemberDto.Client_Response memberToMemberClientResponse(Member member);


}
