package com.portfolly.server.bookmark.controller;

import com.portfolly.server.bookmark.service.BookmarkService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/bookmarks")
@CrossOrigin("*")
public class BookmarkController {
    private final BookmarkService bookmarkService;

    @GetMapping("/{portfolio-id}")
    public ResponseEntity bookmark(@PathVariable("portfolio-id") Long portfolioId,
                                   @RequestHeader(name = "AccessToken") String accessToken){
        bookmarkService.selectBookmark(portfolioId, accessToken);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
