package com.portfolly.server.board.mapper;

import com.portfolly.server.board.dto.BoardDto;
import com.portfolly.server.board.entity.Board;
import com.portfolly.server.comment.dto.CommentDto;
import com.portfolly.server.comment.entity.Comment;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-07-13T19:47:30+0900",
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
        if ( board.getCreatedAt() != null ) {
            response.setCreatedAt( LocalDateTime.parse( board.getCreatedAt() ) );
        }
        if ( board.getModifiedAt() != null ) {
            response.setModifiedAt( LocalDateTime.parse( board.getModifiedAt() ) );
        }
        response.setDivision( board.getDivision() );
        response.setView( board.getView() );
        response.setComments( commentToCommentResponseList( board.getComments() ) );
        if ( board.getStatus() != null ) {
            response.setStatus( board.getStatus().name() );
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

    @Override
    public List<CommentDto.Response> commentToCommentResponseList(List<Comment> comments) {
        if ( comments == null ) {
            return null;
        }

        List<CommentDto.Response> list = new ArrayList<CommentDto.Response>( comments.size() );
        for ( Comment comment : comments ) {
            list.add( commentToResponse( comment ) );
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
        if ( board.getCreatedAt() != null ) {
            responseList.setCreatedAt( LocalDateTime.parse( board.getCreatedAt() ) );
        }
        if ( board.getModifiedAt() != null ) {
            responseList.setModifiedAt( LocalDateTime.parse( board.getModifiedAt() ) );
        }
        responseList.setDivision( board.getDivision() );
        responseList.setView( board.getView() );
        if ( board.getStatus() != null ) {
            responseList.setStatus( board.getStatus().name() );
        }

        return responseList;
    }

    protected CommentDto.Response commentToResponse(Comment comment) {
        if ( comment == null ) {
            return null;
        }

        CommentDto.Response response = new CommentDto.Response();

        response.setId( comment.getId() );
        response.setContent( comment.getContent() );
        response.setStatus( comment.getStatus() );

        return response;
    }
}
