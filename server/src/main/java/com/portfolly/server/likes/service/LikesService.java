package com.portfolly.server.likes.service;

import com.portfolly.server.likes.entity.Likes;
import com.portfolly.server.likes.repository.LikesRepository;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.member.service.MemberService;
import com.portfolly.server.portfolio.entity.Portfolio;
import com.portfolly.server.portfolio.service.PortfolioService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LikesService {
    private final LikesRepository likesRepository;
    private final PortfolioService portfolioService;
    private final MemberService memberService;

    //if Likes 있으면 등록하고 없으면 취소
    public void selectLikes(Long portfolioId, String accessToken) {
//        Member member = memberService.findMember(memberId);
        Long memberId = portfolioService.findMemberId(accessToken);
        Optional<Likes> optionalLikes = likesRepository.findByMemberIdAndPortfolioId(memberId, portfolioId);
        if (optionalLikes.isPresent()) {
            likesRepository.delete(optionalLikes.orElseThrow(()->new RuntimeException()));
        }
        else {
            Portfolio portfolio = portfolioService.findVerifiedPortfolio(portfolioId);
            Member member = memberService.findMember(memberId);
            Likes likes = new Likes();
//            selectLikes(portfolioId, accessToken);
            likes.setPortfolio(portfolio);
            likes.setMember(member);
            likesRepository.save(likes);
        }
    }

}
