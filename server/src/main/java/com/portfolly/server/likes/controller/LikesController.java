package com.portfolly.server.likes.controller;

import com.portfolly.server.likes.service.LikesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/likes")
public class LikesController {
    private final LikesService likesService;

    @GetMapping
    public ResponseEntity likes(@RequestParam Long memberId, Long portfolioId){
        likesService.selectLikes(memberId, portfolioId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
