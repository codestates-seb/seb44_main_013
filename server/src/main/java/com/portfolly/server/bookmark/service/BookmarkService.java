package com.portfolly.server.bookmark.service;

import com.portfolly.server.bookmark.entity.Bookmark;
import com.portfolly.server.bookmark.repository.BookmarkRepository;
import com.portfolly.server.likes.entity.Likes;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.member.service.MemberService;
import com.portfolly.server.portfolio.entity.Portfolio;
import com.portfolly.server.portfolio.service.PortfolioService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BookmarkService {
    private final BookmarkRepository bookmarkRepository;
    private final PortfolioService portfolioService;
    private final MemberService memberService;

    //북마크 등록 or 취소
    public void selectBookmark(Long portfolioId, String accessToken) {
        Long memberId = portfolioService.findMemberId(accessToken);
        Optional<Bookmark> optionalBookmark = bookmarkRepository.findByMemberIdAndPortfolioId(memberId, portfolioId);
        if (optionalBookmark.isPresent()) {
            bookmarkRepository.delete(optionalBookmark.orElseThrow(()->new RuntimeException()));
        }
        else {
            Portfolio portfolio = portfolioService.findVerifiedPortfolio(portfolioId);
            Member member = memberService.findMember(memberId);
            Bookmark bookmark = new Bookmark();
//            selectBookmark(portfolioId, accessToken);
            bookmark.setMember(member);
            bookmark.setPortfolio(portfolio);
            bookmarkRepository.save(bookmark);
        }
    }

}
