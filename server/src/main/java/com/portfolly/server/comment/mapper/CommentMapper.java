package com.portfolly.server.comment.mapper;

import com.portfolly.server.comment.dto.CommentDto;
import com.portfolly.server.comment.entity.Comment;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    Comment postToComment(CommentDto.Post post);
    Comment patchToComment(CommentDto.Patch patch);
    CommentDto.Response commentToResponse(Comment comment);
    List<CommentDto.Response> commentsToResponseList(List<Comment> comments);
}
