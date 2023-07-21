package com.portfolly.server.picture.repository;

import com.portfolly.server.picture.entity.Picture;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PictureRepository extends JpaRepository<Picture,Long> {
    List<Picture> findAllByPortfolioId(Long portfolioId);
    Picture findByPortfolioId(Long portfolioId);
    Optional<Picture> findByPictureUrl(String pictureUrl);
}
