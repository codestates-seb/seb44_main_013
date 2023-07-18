package com.portfolly.server.portfolio.mapper;

import com.portfolly.server.portfolio.dto.PortfolioDto;
import com.portfolly.server.portfolio.entity.Portfolio;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-07-18T15:17:16+0900",
    comments = "version: 1.5.3.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-8.1.1.jar, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class PortfolioMapperImpl implements PortfolioMapper {

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
    public Portfolio patchDtoToPortfolio(PortfolioDto.Patch patchDto) {
        if ( patchDto == null ) {
            return null;
        }

        Portfolio portfolio = new Portfolio();

        portfolio.setId( patchDto.getId() );
        portfolio.setTitle( patchDto.getTitle() );
        portfolio.setContent( patchDto.getContent() );
        portfolio.setExplains( patchDto.getExplains() );

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

        return response;
    }
}
