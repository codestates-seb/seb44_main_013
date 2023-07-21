//package com.portfolly.server.portfolio.controller;
//
//import com.portfolly.server.portfolio.service.PortfolioTagService;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.config.web.servlet.oauth2.login.OAuth2LoginSecurityMarker;
//import org.springframework.validation.annotation.Validated;
//import org.springframework.web.bind.annotation.*;
//
//@RequestMapping("/tags")
//@Validated
//@Slf4j
//@RestController
//@RequiredArgsConstructor
//public class PortfolioTagController {
//    private final PortfolioTagService portfolioTagService;
//
//    //근데 포트폴리오 등록시 포트폴리오태그가 만들어져야함
//    //postPortfolio에서 같이하는 방법?
//
//    @PostMapping
//    public ResponseEntity postPortfolioTag(@PathVariable("tag-id") Long tagId,
//                                           @PathVariable("portfolio-id") Long portfolioId,
//                                           @RequestHeader String accessToken) {
//        portfolioTagService.createPortfolioTag(tagId, portfolioId, accessToken);
//
//        return ResponseEntity.ok().build();
//    }
//}
