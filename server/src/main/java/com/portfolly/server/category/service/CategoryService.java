package com.portfolly.server.category.service;

import com.portfolly.server.tag.entity.Tag;
import com.portfolly.server.category.repository.CategoryRepository;
import com.portfolly.server.exception.businessLogicException.BusinessLogicException;
import com.portfolly.server.exception.businessLogicException.ExceptionCode;
import com.portfolly.server.portfolio.repository.PortfolioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class CategoryService {
//    private final CategoryRepository categoryRepository;
//    private final PortfolioRepository portfolioRepository;
//    private final TagRepository tagRepository;
//
//
//
//
//    public Page<Tag> TagByCategory (int page, int size, long categoryId) {
//        Optional<Tag> optionalTag = tagRepository.findById(categoryId);
//        Tag tag = optionalTag.orElseThrow(() -> new BusinessLogicException(ExceptionCode.TAG_NOT_FOUND));
//
//        List<Tag> tags = tag.getPortfolio().getTags();
////        List<Question> questions = new ArrayList<>();
////        for (int i = 0; i < questionTags.size(); i++) {
////            questions.add(questionTags.get(i).getQuestion());
////        }
//        PageRequest pageRequest = PageRequest.of(page, size);
//        int start = (int) pageRequest.getOffset();
//        int end = Math.min((start + pageRequest.getPageSize()), tags.size());
//        Page<Tag> questionPage = new PageImpl<>(tags.subList(start, end), pageRequest, tags.size());
//
//        return questionPage;
//    }
}
