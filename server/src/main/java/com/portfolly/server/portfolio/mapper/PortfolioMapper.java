package com.portfolly.server.portfolio.mapper;

import com.portfolly.server.category.mapper.CategoryMapper;
import com.portfolly.server.member.dto.MemberDto;
import com.portfolly.server.member.mapper.MemberMapper;
import com.portfolly.server.portfolio.dto.PortfolioDto;
import com.portfolly.server.portfolio.dto.PortfolioTagDto;
import com.portfolly.server.portfolio.entity.Portfolio;
import com.portfolly.server.portfolio.entity.PortfolioTag;
import com.portfolly.server.tag.dto.TagDto;
import com.portfolly.server.tag.entity.Tag;
import org.mapstruct.Mapper;
import com.portfolly.server.member.entity.Member;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring", uses = {MemberMapper.class, CategoryMapper.class, Tag.class})
public interface PortfolioMapper {
    @Mapping(target = "category", ignore = true)
    @Mapping(target = "portfolioTags", ignore = true)
    Portfolio postDtoToPortfolio(PortfolioDto.Post postDto);
    List<PortfolioDto.Response> portfoliosToResponseDto(List<Portfolio> portfolios);

    @Mapping(target = "portfolioTags", qualifiedByName = "portfolioTagToTagDtoResponses")
    @Mapping(target = "member", qualifiedByName = "memberToMemberResponse")
    PortfolioDto.Response portfolioToResponseDto(Portfolio portfolio);


//    MemberDto.Client_Response memberToMemberClientResponse(List<Member> member);

    //List<MemberDto.Response> memberToMemberPartnerResponse(List<Member> members);
    @Named("memberToMemberResponse")
    MemberDto.Response memberToMemberResponse(Member member);

    //내가 얻고싶은 것 List<tagDto.response> tags
    default TagDto.Response portfolioTagToTagDtoResponse(PortfolioTag portfolioTag){
        if( portfolioTag == null) return null;

        TagDto.Response response = new TagDto.Response();

        response.setId(portfolioTag.getTag().getId());
        response.setName(portfolioTag.getTag().getName());
        return response;
    }
    @Named("portfolioTagToTagDtoResponses")
    default List<TagDto.Response> portfolioTagToTagDtoResponses(List<PortfolioTag> portfolioTags){
        if( portfolioTags == null) return null;

        List<TagDto.Response> responses = new ArrayList<>();

        for(PortfolioTag portfolioTag : portfolioTags) {
            responses.add(portfolioTagToTagDtoResponse(portfolioTag));
        }
        return responses;
    }

    PortfolioTagDto.Response portfolioTagToPortfolioTagDtoResponse(PortfolioTag portfolioTag);
    List<PortfolioTagDto.Response> portfolioTagsToResponseDto(List<PortfolioTag> portfolioTags);

}
