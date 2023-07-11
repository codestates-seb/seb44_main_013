package com.portfolly.server.portfolio.repository;

import com.portfolly.server.portfolio.entity.Portfolio;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PortfolioRepository extends JpaRepository<Portfolio,Long> {
    Page<Portfolio> findByPortfolioStatusAndCategory(Pageable pageable, String category, Portfolio.Status status);
}
