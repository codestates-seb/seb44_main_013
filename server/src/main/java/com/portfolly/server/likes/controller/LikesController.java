package com.portfolly.server.likes.controller;

import com.portfolly.server.likes.service.LikesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/likes")
public class LikesController {
    private final LikesService likesService;

    @GetMapping("/{portfolio-id}")
    public ResponseEntity likes(@PathVariable Long portfolioId,
                                @RequestHeader(name = "AccessToken") String accessToken){
        likesService.selectLikes(portfolioId, accessToken);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
