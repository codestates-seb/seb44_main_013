package com.portfolly.server.bookmark.repository;

import com.portfolly.server.bookmark.entity.Bookmark;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.portfolio.entity.Portfolio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookmarkRepository extends JpaRepository<Bookmark,Long> {
    Optional<Bookmark> findByMemberAndPortfolio(Member member, Portfolio portfolio);
    List<Bookmark> findByMember(Member member);
}
