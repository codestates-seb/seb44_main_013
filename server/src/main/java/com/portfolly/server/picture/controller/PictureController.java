//package com.portfolly.server.picture.controller;
//
//import com.portfolly.server.picture.service.PictureService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.util.List;
//
//@RestController
//@RequiredArgsConstructor
//@RequestMapping("/s3")
//public class PictureController {
//   private final PictureService pictureService;
//
//
//   @PostMapping("/picture")
//   public ResponseEntity<List<String>> uploadImage(@RequestParam(value = "file", required = true)
//                                                   @RequestPart List<MultipartFile> file) {
//       return new ResponseEntity<>(pictureService.uploadImage(file), HttpStatus.CREATED);
//   }
//
//   @DeleteMapping("/picture")
//   public ResponseEntity<Void> deleteImage(@RequestParam String fileName) {
//       pictureService.deleteImage(fileName);
//       return new ResponseEntity<>(HttpStatus.OK);
//   }
//}
