package com.portfolly.server.likes.repository;

import com.portfolly.server.bookmark.entity.Bookmark;
import com.portfolly.server.likes.entity.Likes;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.portfolio.entity.Portfolio;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface LikesRepository extends JpaRepository<Likes, Long> {
    Optional<Likes> findByMemberIdAndPortfolioId(Long memberId, Long portfolioId);
    List<Likes> findByPortfolioId(Long portfolioId);
}
