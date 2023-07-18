package com.portfolly.server.member.image.service;

import com.portfolly.server.member.entity.Member;
import com.portfolly.server.member.image.entity.ImageData;
import com.portfolly.server.member.image.repository.StorageRepository;
import com.portfolly.server.member.image.util.ImageUtils;
import com.portfolly.server.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Arrays;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StorageService {

    private final StorageRepository repository;
    private final MemberService memberService;

    public String uploadImage(MultipartFile file, Member member) throws IOException {

        ImageData imageData = repository.save(ImageData.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .imageData(ImageUtils.compressImage(file.getBytes()))
                .member(member).build());

        return "file uploaded successfully : " + file.getOriginalFilename();
    }

    public byte[] downloadImage(String filename) {
        ImageData dbImageData = repository.findByName(filename);

        return ImageUtils.decompressImage(dbImageData.getImageData());
    }

    public String changeImage(MultipartFile file,long memberId) throws IOException {

        ImageData existingImageData = repository.findByMemberId(memberId);

        existingImageData.setImageData(ImageUtils.compressImage(file.getBytes()));
        existingImageData.setName(file.getOriginalFilename());
        existingImageData.setType(file.getContentType());
        repository.save(existingImageData);

        return "file replaced successfully : " + file.getOriginalFilename();
    }

    public String findImageData(long memberId){

        ImageData imageData = repository.findByMemberId(memberId);

        return imageData.getName();
    }
}
