//package com.portfolly.server.category.service;
//
//
//import com.portfolly.server.category.entity.Tag;
//import com.portfolly.server.category.repository.TagRepository;
//import com.portfolly.server.exception.businessLogicException.BusinessLogicException;
//import com.portfolly.server.exception.businessLogicException.ExceptionCode;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//import java.util.Optional;
//
//@Service
//@RequiredArgsConstructor
//public class TagService {
//    private final TagRepository tagRepository;
//    public Tag findVerifiedTag(Long tagId) {
//        Optional<Tag> optionalTag = tagRepository.findById(tagId);
//        Tag findTag = optionalTag.orElseThrow(()->new BusinessLogicException(ExceptionCode.TAG_NOT_FOUND));
//        return findTag;
//    }
//
//}
