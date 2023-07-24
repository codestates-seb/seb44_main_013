package com.portfolly.server.portfolio.controller;

import com.portfolly.server.dto.MultiResponseDto;
import com.portfolly.server.dto.SingleResponseDto;
import com.portfolly.server.portfolio.dto.PortfolioDto;
import com.portfolly.server.portfolio.entity.Portfolio;
import com.portfolly.server.portfolio.mapper.PortfolioMapper;
import com.portfolly.server.portfolio.service.PortfolioService;
import com.portfolly.server.utils.UriCreator;
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
@CrossOrigin("*")
public class PortfolioController {
    private final PortfolioMapper portfolioMapper;
    private final PortfolioService portfolioService;
    private final static String PORTFOLIO_DEFAULT_URL = "/portfolios";

    //포트폴리오 등록
    @PostMapping
    public ResponseEntity postPortfolio(@RequestHeader (name = "AccessToken") String accessToken,
                                        @Valid @RequestBody PortfolioDto.Post postDto){
        //포트폴리오 내용 등록
        Portfolio portfolio = portfolioService.postPortfolio(postDto, accessToken);
        //포트폴리오 이미지 등록
        portfolioService.addPicture(portfolio);
        URI location = UriCreator.createUri(PORTFOLIO_DEFAULT_URL, portfolio.getId());
        return ResponseEntity.created(location).build();
    }

    //포트폴리오 수정
    @PatchMapping("/{portfolio-id}")
    public ResponseEntity patchPortfolio(@PathVariable("portfolio-id") Long portfolioId,
                                         @RequestHeader(name = "AccessToken") String accessToken,
                                         @Valid @RequestBody PortfolioDto.Patch patchDto){
        Long memberId = portfolioService.findMemberId(accessToken);
        patchDto.setId(portfolioId);
        Portfolio portfolio = portfolioService.updatePortfolio(patchDto, accessToken);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //포트폴리오 상세 조회
    @GetMapping("/{portfolio-id}")
    public ResponseEntity getPortfolio(@PathVariable("portfolio-id") Long portfolioId,
                                       @RequestHeader(name = "AccessToken", required = false) String accessToken){
        PortfolioDto.Response response = portfolioService.selectPortfolio(portfolioId, accessToken);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    //포트폴리오 전체 조회
    //web, app, 3danimation, graphicDesign, photo
    @GetMapping
    public ResponseEntity getPortfolios(@RequestParam("page") int page,
                                        @RequestParam("size") int size,
                                        @RequestParam String category,
                                        @RequestHeader(name = "AccessToken",required = false) String accessToken) {
        Page<Portfolio> pagePortfolios = portfolioService.findPortfolios(page -1, size, category);
        List<Portfolio> portfolios = pagePortfolios.getContent();
        List<PortfolioDto.Response> responses = portfolioMapper.portfoliosToResponseDto(portfolios);
        portfolioService.setResponse(responses,accessToken);
        return new ResponseEntity<>(new MultiResponseDto<>(responses, pagePortfolios), HttpStatus.OK);
    }

    //포트폴리오 삭제
    @DeleteMapping("/{portfolio-id}")
    public ResponseEntity deletePortfolio(@Positive @PathVariable("portfolio-id") Long portfolioId,
                                          @RequestHeader(name = "AccessToken") String accessToken) {
        portfolioService.deletePortfolio(portfolioId,accessToken);
        return ResponseEntity.noContent().build();
    }



}
