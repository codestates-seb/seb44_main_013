package com.portfolly.server.board.mapper;


import com.portfolly.server.board.dto.BoardDto;
import com.portfolly.server.board.entity.Board;
import com.portfolly.server.comment.dto.CommentDto;
import com.portfolly.server.comment.entity.Comment;
import com.portfolly.server.member.dto.MemberDto;
import com.portfolly.server.member.entity.Member;
import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardMapper {
    Board boardPostToBoard(BoardDto.Post post);
    Board boardPatchToBoard(BoardDto.Patch patch);
    Board boardResponseToBoard(BoardDto.Response response);
    BoardDto.Response boardToBoardResponse(Board board);
    List<BoardDto.ResponseList> boardsToBoardResponseList(List<Board> boards);
    List<CommentDto.Response> commentsToCommentResponseList(List<Comment> comments);
}