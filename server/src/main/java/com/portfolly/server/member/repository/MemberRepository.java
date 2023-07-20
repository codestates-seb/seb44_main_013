package com.portfolly.server.member.repository;

import com.portfolly.server.board.entity.Board;
import com.portfolly.server.bookmark.entity.Bookmark;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.portfolio.entity.Portfolio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByEmail(String email);

    Optional<Member> findByRefreshToken(String refreshToken);

    @Query("SELECT p FROM Portfolio p WHERE p.member.id = :memberId")
    List<Portfolio> findPortfoliosByMemberId(@Param("memberId") Long memberId);

    @Query("SELECT b FROM Bookmark b WHERE b.member.id = :memberId")
    List<Bookmark> findBookmarkByMemberId(@Param("memberId") Long memberId);

    @Query("SELECT b FROM Board b WHERE b.member.id = :memberId")
    List<Board> findBoardByMemberId(@Param("memberId") Long memberId);
}
