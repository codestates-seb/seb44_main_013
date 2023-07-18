package com.portfolly.server.comment.respository;

import com.portfolly.server.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface CommentRepository extends JpaRepository<Comment, Long> {

    @Query("SELECT c from Comment c JOIN FETCH c.member WHERE c.board.id = :boardId")
    Optional<List<Comment>> findCommentsByBoardId(@Param("boardId") Long boardId);
}
