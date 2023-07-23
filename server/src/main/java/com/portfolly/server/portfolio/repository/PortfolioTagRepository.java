package com.portfolly.server.portfolio.repository;

import com.portfolly.server.portfolio.entity.PortfolioTag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PortfolioTagRepository extends JpaRepository<PortfolioTag, Long> {
}
