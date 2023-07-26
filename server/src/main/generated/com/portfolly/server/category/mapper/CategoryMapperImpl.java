package com.portfolly.server.category.mapper;

import com.portfolly.server.category.dto.CategoryDto;
import com.portfolly.server.category.entity.Category;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-07-24T00:21:06+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class CategoryMapperImpl implements CategoryMapper {

    @Override
    public CategoryDto.Response categoryToResponseDto(Category category) {
        if ( category == null ) {
            return null;
        }

        CategoryDto.Response response = new CategoryDto.Response();

        response.setId( category.getId() );
        response.setName( category.getName() );

        return response;
    }
}
