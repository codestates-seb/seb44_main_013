package com.portfolly.server.board.respository;

import com.portfolly.server.board.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Repository
@Transactional
public interface BoardRepository extends JpaRepository<Board, Long> {
    @Query("SELECT b from Board b WHERE b.division = :division")
    List<Board> findBoardByDivision(@Param("division") Board.Division division);
}
