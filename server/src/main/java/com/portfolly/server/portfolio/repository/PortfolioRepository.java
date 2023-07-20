package com.portfolly.server.portfolio.repository;

import com.portfolly.server.portfolio.entity.Portfolio;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PortfolioRepository extends JpaRepository<Portfolio,Long> {
    //    @Query("SELECT b from Portfolio b WHERE b.status = :status")
    Page<Portfolio> findByStatusAndCategoryId(Pageable pageable, Long categoryId, Portfolio.Status status);
}
