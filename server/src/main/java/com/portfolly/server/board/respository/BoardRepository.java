package com.portfolly.server.board.respository;

import com.portfolly.server.board.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {
    // todo : division 쿼리작성
}
