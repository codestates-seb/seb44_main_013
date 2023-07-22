package com.portfolly.server.tag.mapper;

import com.portfolly.server.tag.dto.TagDto;
import com.portfolly.server.tag.entity.Tag;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TagMapper {
    List<TagDto.Response> tagToTagResponseDto(List<Tag> tags);
    TagDto.Response TagsToTagResponseDto(Tag tag);
}
