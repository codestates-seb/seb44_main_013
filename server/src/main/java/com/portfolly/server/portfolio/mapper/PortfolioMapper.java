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

//    @Mapping(target = "tags", ignore = true)
    @Mapping(target = "portfolioTags", qualifiedByName = "portfolioTagToTagDtoResponses")
    @Mapping(target = "member", qualifiedByName = "memberToMemberResponse")
    PortfolioDto.Response portfolioToResponseDto(Portfolio portfolio);
    //portfolioDto.Response tags
    //portfolio portfolioTags

    //List<MemberDto.Response> memberToMemberPartnerResponse(List<Member> members);
    @Named("memberToMemberResponse")
    MemberDto.Response memberToMemberResponse(Member member);

    //내가 얻고싶은 것 List<tagDto.response> tags
    //
    //'해당하는'? portfolioId가 들어있는 List portfoliotags에서 tagId에 해당하는 List tags의 id+name 필요함
    //portfolioDto response 안에 있는 tagResponseDto로 바로 바꿔주지 못함
    //portfolioTag entity를 tagDto.response로 바꿔주지 못한다
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
