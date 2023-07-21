package com.portfolly.server.picture.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.portfolly.server.dto.SingleResponseDto;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.picture.entity.Picture;
import com.portfolly.server.picture.repository.PictureRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PictureService {
   private PictureRepository pictureRepository;
   @Value("${cloud.aws.s3.bucket}")
   private String bucket;
   private final AmazonS3 amazonS3;

   public List<String> uploadImage(List<MultipartFile> multipartFile) {
       List<String> fileNameList = new ArrayList<>();

       multipartFile.forEach(file -> {
           String fileName = createFileName(file.getOriginalFilename());
           ObjectMetadata objectMetadata = new ObjectMetadata();
           objectMetadata.setContentLength(file.getSize());
           objectMetadata.setContentType(file.getContentType());

           try(InputStream inputStream = file.getInputStream()) {
               amazonS3.putObject(new PutObjectRequest(bucket, fileName, inputStream, objectMetadata)
                       .withCannedAcl(CannedAccessControlList.PublicRead));
           } catch(IOException e) {
               throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "이미지 업로드에 실패했습니다.");
           }
           String pictureUrl = "https://portfolly-picture.s3.ap-northeast-2.amazonaws.com/"+fileName;

           fileNameList.add(pictureUrl);

//           Picture picture = new Picture();
//           picture.setFileName(fileName);
//           picture.setPictureUrl(pictureUrl);
//           pictureRepository.save(picture);
       });


       return fileNameList;
   }

   public void deleteImage(String fileName) {
       amazonS3.deleteObject(new DeleteObjectRequest(bucket, fileName));
   }

   private String createFileName(String fileName) {
       return UUID.randomUUID().toString().concat(getFileExtension(fileName));
   }

   private String getFileExtension(String fileName) {
       try {
           return fileName.substring(fileName.lastIndexOf("."));
       } catch (StringIndexOutOfBoundsException e) {
           throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "잘못된 형식의 파일(" + fileName + ") 입니다.");
       }
   }
}
