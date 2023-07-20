package com.portfolly.server.comment.mapper;

import com.portfolly.server.comment.dto.CommentDto;
import com.portfolly.server.comment.entity.Comment;
import java.time.LocalDateTime;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-07-19T17:34:19+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.19 (Amazon.com Inc.)"
)
@Component
public class CommentMapperImpl implements CommentMapper {

    @Override
    public Comment postToComment(CommentDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Comment comment = new Comment();

        comment.setContent( post.getContent() );

        return comment;
    }

    @Override
    public Comment patchToComment(CommentDto.Patch patch) {
        if ( patch == null ) {
            return null;
        }

        Comment comment = new Comment();

        comment.setId( patch.getId() );
        comment.setContent( patch.getContent() );

        return comment;
    }

    @Override
    public CommentDto.Response commentToResponse(Comment comment) {
        if ( comment == null ) {
            return null;
        }

        CommentDto.Response response = new CommentDto.Response();

        response.setId( comment.getId() );
        response.setContent( comment.getContent() );
        response.setStatus( comment.getStatus() );
        if ( comment.getCreatedAt() != null ) {
            response.setCreatedAt( LocalDateTime.parse( comment.getCreatedAt() ) );
        }
        if ( comment.getModifiedAt() != null ) {
            response.setModifiedAt( LocalDateTime.parse( comment.getModifiedAt() ) );
        }

        return response;
    }
}
