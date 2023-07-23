package com.portfolly.server.portfolio.mapper;

import com.portfolly.server.category.mapper.CategoryMapper;
import com.portfolly.server.member.dto.MemberDto;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.portfolio.dto.PortfolioDto;
import com.portfolly.server.portfolio.dto.PortfolioTagDto;
import com.portfolly.server.portfolio.entity.Portfolio;
import com.portfolly.server.portfolio.entity.PortfolioTag;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
<<<<<<< HEAD
    date = "2023-07-21T23:56:43+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.19 (Amazon.com Inc.)"
=======
    date = "2023-07-22T22:29:34+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
>>>>>>> 01d0a42c105b2c6c1176255d4c95ecf95d51ae6b
)
@Component
public class PortfolioMapperImpl implements PortfolioMapper {

    @Autowired
    private CategoryMapper categoryMapper;

    @Override
    public Portfolio postDtoToPortfolio(PortfolioDto.Post postDto) {
        if ( postDto == null ) {
            return null;
        }

        Portfolio portfolio = new Portfolio();

        portfolio.setTitle( postDto.getTitle() );
        portfolio.setContent( postDto.getContent() );
        portfolio.setExplains( postDto.getExplains() );

        return portfolio;
    }

    @Override
    public List<PortfolioDto.Response> portfoliosToResponseDto(List<Portfolio> portfolios) {
        if ( portfolios == null ) {
            return null;
        }

        List<PortfolioDto.Response> list = new ArrayList<PortfolioDto.Response>( portfolios.size() );
        for ( Portfolio portfolio : portfolios ) {
            list.add( portfolioToResponseDto( portfolio ) );
        }

        return list;
    }

    @Override
    public PortfolioDto.Response portfolioToResponseDto(Portfolio portfolio) {
        if ( portfolio == null ) {
            return null;
        }

        PortfolioDto.Response response = new PortfolioDto.Response();

        response.setPortfolioTags( portfolioTagToTagDtoResponses( portfolio.getPortfolioTags() ) );
        response.setMember( memberToMemberResponse( portfolio.getMember() ) );
        response.setId( portfolio.getId() );
        response.setTitle( portfolio.getTitle() );
        response.setContent( portfolio.getContent() );
        response.setExplains( portfolio.getExplains() );
        response.setView( portfolio.getView() );
        if ( portfolio.getCreatedAt() != null ) {
            response.setCreatedAt( LocalDateTime.parse( portfolio.getCreatedAt() ) );
        }
        if ( portfolio.getModifiedAt() != null ) {
            response.setModifiedAt( LocalDateTime.parse( portfolio.getModifiedAt() ) );
        }
        response.setCategory( categoryMapper.categoryToResponseDto( portfolio.getCategory() ) );

        return response;
    }

    @Override
    public MemberDto.Response memberToMemberResponse(Member member) {
        if ( member == null ) {
            return null;
        }

        MemberDto.Response response = new MemberDto.Response();

        response.setId( member.getId() );
        response.setName( member.getName() );
        response.setEmail( member.getEmail() );
        response.setMember_role( member.getMember_role() );

        return response;
    }

    @Override
    public PortfolioTagDto.Response portfolioTagToPortfolioTagDtoResponse(PortfolioTag portfolioTag) {
        if ( portfolioTag == null ) {
            return null;
        }

        PortfolioTagDto.Response response = new PortfolioTagDto.Response();

        if ( portfolioTag.getId() != null ) {
            response.setId( portfolioTag.getId() );
        }

        return response;
    }

    @Override
    public List<PortfolioTagDto.Response> portfolioTagsToResponseDto(List<PortfolioTag> portfolioTags) {
        if ( portfolioTags == null ) {
            return null;
        }

        List<PortfolioTagDto.Response> list = new ArrayList<PortfolioTagDto.Response>( portfolioTags.size() );
        for ( PortfolioTag portfolioTag : portfolioTags ) {
            list.add( portfolioTagToPortfolioTagDtoResponse( portfolioTag ) );
        }

        return list;
    }
}
