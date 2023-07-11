//package com.portfolly.server.member.security.oauth2_jwt.jwt;
//
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.Jws;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.io.Decoders;
//import io.jsonwebtoken.io.Encoders;
//import io.jsonwebtoken.security.Keys;
//import lombok.Getter;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Component;
//
//import java.nio.charset.StandardCharsets;
//import java.security.Key;
//import java.util.Calendar;
//import java.util.Date;
//import java.util.Map;
//
//@Component
//public class JwtTokenizer {
//
//    @Getter
//    @Value("${jwt.key.secret}")
//    private String secretKey;
//
//    @Getter
//    @Value("${jwt.access-token-expiration-minutes}")
//    private int accessTokenExpirationMinutes;
//
//    @Getter
//    @Value("${jwt.refresh-token-expiration-minutes}")
//    private int refreshTokenExpirationMinutes;
//
//    public String encodeBase64SecretKey(String secretKey) {
//        return Encoders.BASE64.encode(secretKey.getBytes(StandardCharsets.UTF_8));
//    }
//    // JWT 생성 메서드
//    public String generateAccessToken(Map<String, Object> claims,
//                                      String subject,
//                                      Date expiration,
//                                      String base64EncodedSecretKey) {
//        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);
//
//        return Jwts.builder()
//                .setClaims(claims) // 사용자 관련 정보
//                .setSubject(subject) //JWT 제목
//                .setIssuedAt(Calendar.getInstance().getTime()) // JWT 발행일자
//                .setExpiration(expiration) // JWT 만료일시
//                .signWith(key) // 서명 Key 객체
//                .compact(); // JWT 생성 및 직렬화
//    }
//    // Refresh Token 생성
//    public String generateRefreshToken(String subject,
//                                       Date expiration,
//                                       String base64EncodedSecretKey) {
//        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);
//
//        return Jwts.builder()
//                .setSubject(subject)
//                .setExpiration(expiration)
//                .signWith(key)
//                .compact();
//    }
//    // 검증 후 멤버 정보 반환용(Claims)
//    public Jws<Claims> getClaims(String jws,String base64EncodedSecretKey){
//        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);
//
//        Jws<Claims> claims = Jwts.parserBuilder()
//                .setSigningKey(key)
//                .build()
//                .parseClaimsJws(jws);
//
//        return claims;
//    }
//
//    // JWT 위/변조 검증 -> jws(JWT Signature)
//    public void verifySignature(String jws,String base64EncodedSecretKey) {
//        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);
//
//        Jwts.parserBuilder()
//                .setSigningKey(key)
//                .build()
//                .parseClaimsJws(jws);
//    }
//
//    public Date getTokenExpiration(int expirationMinutes){
//        Calendar calendar = Calendar.getInstance();
//        calendar.add(Calendar.MINUTE,expirationMinutes);
//        Date expiration = calendar.getTime();
//
//        return expiration;
//    }
//    // JWT 서명에 사용할 SecretKey 생성
//    private Key getKeyFromBase64EncodedKey(String base64EncodedSecretKey) {
//        byte[] keyBytes = Decoders.BASE64.decode(base64EncodedSecretKey);
//        Key key = Keys.hmacShaKeyFor(keyBytes);
//
//        return key;
//    }
//}
