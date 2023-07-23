package com.portfolly.server.bookmark.service;

import com.portfolly.server.bookmark.entity.Bookmark;
import com.portfolly.server.bookmark.repository.BookmarkRepository;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.member.service.MemberService;
import com.portfolly.server.portfolio.service.PortfolioService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BookmarkService {
    private final BookmarkRepository bookmarkRepository;
    private final PortfolioService portfolioService;

    //북마크 등록 or 취소
    public void selectBookmark(Long portfolioId, String accessToken) {
        Long memberId = portfolioService.findMemberId(accessToken);
        Optional<Bookmark> optionalBookmark = bookmarkRepository.findByMemberIdAndPortfolioId(memberId, portfolioId);
        if (optionalBookmark.isPresent()) {
            bookmarkRepository.delete(optionalBookmark.orElseThrow(()->new RuntimeException()));
        }
        else {
            Bookmark bookmark = new Bookmark();
//            selectBookmark(portfolioId, accessToken);
            bookmarkRepository.save(bookmark);
        }
    }

}
