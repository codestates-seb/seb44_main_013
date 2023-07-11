package com.portfolly.server.portfolio.controller;

import com.nimbusds.oauth2.sdk.token.RefreshToken;
import com.portfolly.server.dto.MultiResponseDto;
import com.portfolly.server.dto.SingleResponseDto;
import com.portfolly.server.exception.BusinessLogicException;
import com.portfolly.server.exception.ExceptionCode;
import com.portfolly.server.portfolio.dto.PortfolioDto;
import com.portfolly.server.portfolio.entity.Portfolio;
import com.portfolly.server.portfolio.mapper.PortfolioMapper;
import com.portfolly.server.portfolio.service.PortfolioService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@Validated
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/portfolios")
public class PortfolioController {
    private final PortfolioMapper portfolioMapper;
    private final PortfolioService portfolioService;
    private final static String PORTFOLIO_DEFAULT_URL = "/portfolios";

    //포트폴리오 등록
    @PostMapping
    public ResponseEntity postPortfolio(@Valid @RequestBody PortfolioDto.Post postDto){
        URI location = uriCreator.createUri(PORTFOLIO_DEFAULT_URL, portfolio.getPortfolioId());
        Portfolio portfolio = portfolioService.postPortfolio(postDto, memberId);
        return ResponseEntity.created(location).build();
    }

    //포트폴리오 수정
    @PatchMapping("/{portfolio-id}")
    public ResponseEntity patchPortfolio(@PathVariable("portfolio-id") Long portfolioId,
                                         @Valid @RequestBody PortfolioDto.Patch patchDto){
        patchDto.setPortfolioId(portfolioId);
        portfolioService.updatePortfolio(patchDto, memberId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //포트폴리오 상세 조회
    @GetMapping("/{portfolio-id}")
    public ResponseEntity getPortfolio(@PathVariable("portfolio-id") Long portfolioId){
        Portfolio portfolio = portfolioService.selectPortfolio(portfolioId);
        portfolioService.increaseViews(portfolio);
        return new ResponseEntity<>(new SingleResponseDto<>(portfolioMapper.portfolioToResponseDto(portfolio)),HttpStatus.OK);
    }

    //포트폴리오 전체 조회
    @GetMapping("/{Portfolio-id}")
    public ResponseEntity getPortfolios(@RequestParam("page") int page,
                                        @RequestParam("size") int size,
                                        @RequestParam String category) {
        Page<Portfolio> pagePortfolios = portfolioService.findPortfolios(page -1, size, category);
        List<Portfolio> portfolios = pagePortfolios.getContent();
        for (int i = 0; i < portfolios.size(); i++) {
            System.out.println(portfolios.get(i).toString());
        }
        return new ResponseEntity<>(new MultiResponseDto<>(portfolioMapper.portfolioToResponseDto(portfolios),pagePortfolios),HttpStatus.OK);
    }

    @DeleteMapping("/{portfolio-id}")
    public ResponseEntity deletePortfolio(@Positive @PathVariable("portfolio-id") Long portfolioId,
                                          @RequestHeader(name = "Refresh") String token) {
        Long memberId = findmemberId(token);
        portfolioService.deletePortfolio(portfolioId, memberId);
        return ResponseEntity.noContent().build();
    }

    public Long findmemberId(String token) {
        Optional<RefreshToken> refreshToken = refreshTokenRepository.findByValue(token);
        RefreshToken findtoken = refreshToken.orElseThrow(()->new BusinessLogicException(ExceptionCode.PORTFOLIO_NOT_FOUND));
    }


}
