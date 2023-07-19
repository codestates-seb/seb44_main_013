package com.portfolly.server.category.controller;

import com.portfolly.server.category.entity.Tag;
import com.portfolly.server.category.mapper.CategoryMapper;
import com.portfolly.server.category.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@Validated
@RequestMapping("/categories")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;
    private final CategoryMapper categoryMapper;


//    @GetMapping
//    public ResponseEntity getTags(@Positive @RequestParam("page") int page,
//                                  @Positive @RequestParam("size") int size,
//                                  @Positive @PathVariable("category-id") Long categoryId) {
//        Page<Tag> questionPage = categoryService.TagByCategory(page - 1, size, categoryId);
//        List<Tag> questionList = questionPage.getContent();
//
//        List<OneTagResponseDto> tagResponseDtoList = categoryMapper.tagToTagResponseDto(questionList);
//    }
}
