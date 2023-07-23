package com.portfolly.server.bookmark.controller;

import com.portfolly.server.bookmark.service.BookmarkService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/bookmarks")
public class BookmarkController {
    private final BookmarkService bookmarkService;

    @GetMapping
    public ResponseEntity bookmark(@RequestParam Long memberId, Long portfolioId){
        bookmarkService.selectBookmark(memberId, portfolioId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
