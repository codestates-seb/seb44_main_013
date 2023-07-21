//package com.portfolly.server.portfolio.service;
//
//import com.portfolly.server.category.entity.Tag;
//import com.portfolly.server.category.service.TagService;
//import com.portfolly.server.portfolio.entity.Portfolio;
//import com.portfolly.server.portfolio.entity.PortfolioTag;
//import com.portfolly.server.portfolio.repository.PortfolioTagRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//@Service
//@RequiredArgsConstructor
//public class PortfolioTagService {
//    private final PortfolioService portfolioService;
//    private final TagService tagService;
//    private final PortfolioTagRepository portfolioTagRepository;
//    //Tag 테이블은 spring 실행시 자동 생성
//    //web category - react, vue, ssr, csr
//    //Tag를 객체 배열 형태로 받음 [{tagId: 1, name: "javascript"}, {tagId: 2, name: "react"}] 이런 객체 배열이에요!
//    //배열 값들 하나하나를 받아서 tagId와 매칭시킴(get tagId)
//    //portfolioTag 테이블에 portfolioId와 tagId를 넣어서 저장
//    //어디서부터 어디까지가 tag? portfolioTag?
//
//    public PortfolioTag createPortfolioTag(Long tagId, Long portfolioId, String accessToken) {
//        Long memberId = portfolioService.findMemberId(accessToken);
//        Portfolio portfolio = portfolioService.findVerifiedPortfolio(portfolioId);
//        Tag tag = tagService.findVerifiedTag(tagId);
//
//        PortfolioTag portfolioTag = new PortfolioTag();
//        portfolioTag.setId(memberId);
//        portfolioTag.setPortfolio(portfolio);
//        portfolioTag.setTag(tag);
//
//        return portfolioTagRepository.save(portfolioTag);
//    }
//
//    public PortfolioTag updatePortfolioTag(Long tagId, Long portfolioId, String accessToken) {
//        Long memberId = portfolioService.findMemberId(accessToken);
//        Portfolio findedPortfolio = portfolioService.findVerifiedPortfolio(portfolioId);
//        Tag tag = tagService.findVerifiedTag(tagId);
//
//        if(memberId.equals(portfolioService.findMemberId(accessToken)){
//            PortfolioTag portfolioTag = new
//        }
//    }
//
//}
