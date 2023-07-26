package com.portfolly.server.tag.mapper;

import com.portfolly.server.tag.dto.TagDto;
import com.portfolly.server.tag.entity.Tag;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-07-26T12:10:49+0900",
    comments = "version: 1.5.3.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-8.1.1.jar, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class TagMapperImpl implements TagMapper {

    @Override
    public List<TagDto.Response> tagToTagResponseDto(List<Tag> tags) {
        if ( tags == null ) {
            return null;
        }

        List<TagDto.Response> list = new ArrayList<TagDto.Response>( tags.size() );
        for ( Tag tag : tags ) {
            list.add( TagsToTagResponseDto( tag ) );
        }

        return list;
    }

    @Override
    public TagDto.Response TagsToTagResponseDto(Tag tag) {
        if ( tag == null ) {
            return null;
        }

        TagDto.Response response = new TagDto.Response();

        response.setId( tag.getId() );
        response.setName( tag.getName() );

        return response;
    }
}
