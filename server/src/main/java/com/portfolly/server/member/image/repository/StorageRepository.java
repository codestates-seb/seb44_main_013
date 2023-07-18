package com.portfolly.server.member.image.repository;

import com.portfolly.server.member.image.entity.ImageData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.awt.*;
import java.util.Optional;

public interface StorageRepository extends JpaRepository<ImageData,Long> {

    ImageData findByName(String filename);
    ImageData findByMemberId(Long memberId);
}
