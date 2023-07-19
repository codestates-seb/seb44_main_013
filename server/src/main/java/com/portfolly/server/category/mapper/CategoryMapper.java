package com.portfolly.server.category.mapper;

import com.portfolly.server.category.dto.CategoryDto;
import com.portfolly.server.category.entity.Category;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
    CategoryDto.Response categoryToResponseDto(Category category);
}
