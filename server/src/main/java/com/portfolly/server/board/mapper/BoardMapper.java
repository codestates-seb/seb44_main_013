package com.portfolly.server.board.mapper;


import com.portfolly.server.board.dto.BoardDto;
import com.portfolly.server.board.entity.Board;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardMapper {
    Board boardPostToBoard(BoardDto.Post post);
    Board bardPatchToBoard(BoardDto.Patch patch);
    BoardDto.Response boardToBoardResponse(Board board);
    List<BoardDto.ResponseList> boardsToBoardResponseList(List<Board> boards);
}
