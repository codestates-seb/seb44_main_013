package com.portfolly.server.board.mapper;

import com.portfolly.server.board.dto.BoardDto;
import com.portfolly.server.board.entity.Board;
import com.portfolly.server.comment.entity.Comment;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-07-18T18:04:27+0900",
    comments = "version: 1.5.3.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-8.1.1.jar, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class BoardMapperImpl implements BoardMapper {

    @Override
    public Board boardPostToBoard(BoardDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Board board = new Board();

        board.setTitle( post.getTitle() );
        board.setContent( post.getContent() );
        board.setDivision( post.getDivision() );

        return board;
    }

    @Override
    public Board bardPatchToBoard(BoardDto.Patch patch) {
        if ( patch == null ) {
            return null;
        }

        Board board = new Board();

        board.setId( patch.getId() );
        board.setTitle( patch.getTitle() );
        board.setContent( patch.getContent() );

        return board;
    }

    @Override
    public BoardDto.Response boardToBoardResponse(Board board) {
        if ( board == null ) {
            return null;
        }

        BoardDto.Response response = new BoardDto.Response();

        response.setId( board.getId() );
        response.setTitle( board.getTitle() );
        response.setContent( board.getContent() );
        response.setDivision( board.getDivision() );
        response.setStatus( board.getStatus() );
        response.setView( board.getView() );
        if ( board.getCreatedAt() != null ) {
            response.setCreatedAt( LocalDateTime.parse( board.getCreatedAt() ) );
        }
        if ( board.getModifiedAt() != null ) {
            response.setModifiedAt( LocalDateTime.parse( board.getModifiedAt() ) );
        }
        List<Comment> list = board.getComments();
        if ( list != null ) {
            response.setComments( new ArrayList<Comment>( list ) );
        }

        return response;
    }

    @Override
    public List<BoardDto.ResponseList> boardsToBoardResponseList(List<Board> boards) {
        if ( boards == null ) {
            return null;
        }

        List<BoardDto.ResponseList> list = new ArrayList<BoardDto.ResponseList>( boards.size() );
        for ( Board board : boards ) {
            list.add( boardToResponseList( board ) );
        }

        return list;
    }

    protected BoardDto.ResponseList boardToResponseList(Board board) {
        if ( board == null ) {
            return null;
        }

        BoardDto.ResponseList responseList = new BoardDto.ResponseList();

        responseList.setId( board.getId() );
        responseList.setTitle( board.getTitle() );
        responseList.setContent( board.getContent() );
        responseList.setDivision( board.getDivision() );
        responseList.setStatus( board.getStatus() );
        responseList.setView( board.getView() );

        return responseList;
    }
}
