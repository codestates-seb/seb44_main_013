package com.portfolly.server.member.image.controller;

import com.portfolly.server.member.entity.Member;
import com.portfolly.server.member.image.entity.ImageData;
import com.portfolly.server.member.image.repository.StorageRepository;
import com.portfolly.server.member.image.service.StorageService;
import com.portfolly.server.member.image.util.ImageUtils;
import com.portfolly.server.member.mapper.MemberMapper;
import com.portfolly.server.member.repository.MemberRepository;
import com.portfolly.server.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.Positive;
import java.awt.*;
import java.io.IOException;
import java.util.Optional;

@Validated
@RestController
@RequiredArgsConstructor
@RequestMapping("/image")
public class ImageController {

    private final StorageService service;
    private final MemberService memberService;

    //Todo: 이미지 업로드
    @PostMapping("/{member-id}")
    public ResponseEntity<?> uploadImage(@RequestHeader("Authorization") String accessToken,
                                         @RequestParam("image")MultipartFile file,
                                         @Positive @PathVariable("member-id") long memberId) throws IOException {

        Member member = memberService.findByMember(memberId);
       String uploadImage = service.uploadImage(file,member);

        return ResponseEntity.status(HttpStatus.OK).body(uploadImage);
    }

    //Todo : 이미지 수정
    @PatchMapping("/{member-id}")
    public ResponseEntity<?> UpdateImage(@RequestHeader("Authorization") String accessToken,
                                         @RequestParam("image")MultipartFile file,
                                         @Positive @PathVariable("member-id") long memberId) throws IOException {

        String changeImage = service.changeImage(file, memberId);

        return ResponseEntity.status(HttpStatus.OK).body(changeImage);
    }

    //Todo : 이미지 조회
    @GetMapping("/{member-id}")
    public ResponseEntity<?> downloadImage(@RequestHeader("Authorization") String accessToken,
                                           @Positive @PathVariable("member-id") long memberId){

        byte[] imageData = service.downloadImage(service.findImageData(memberId));
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData);
    }
}
