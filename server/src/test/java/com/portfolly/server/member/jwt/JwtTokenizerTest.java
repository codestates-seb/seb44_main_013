package com.portfolly.server.member.jwt;

import com.portfolly.server.security.authorization.jwt.JwtTokenizer;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.io.Decoders;
import org.junit.jupiter.api.*;

import java.util.*;
import java.util.concurrent.TimeUnit;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertThrows;

// JWT Tokenizer 생성 테스트
@TestInstance(TestInstance.Lifecycle.PER_CLASS) // 테스트 메서드 간에 상태를 공유
public class JwtTokenizerTest {

    private static JwtTokenizer jwtTokenizer;
    private String secretKey;
    private String base64EncodedSecretKey;

    @BeforeAll
    public void init(){
        jwtTokenizer = new JwtTokenizer();
        secretKey = "leeheejae123412341234123412341234";

        base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(secretKey);
    }

    @Test
    public void encodedSecretKeyTest() {
        System.out.println(base64EncodedSecretKey);

        assertThat(secretKey, is(new String(Decoders.BASE64.decode(base64EncodedSecretKey))));
    }

    @Test
    public void generateAccessTokenTest(){
        Map<String,Object> claims = new HashMap<>(); // 사용자 정보
        claims.put("memberId",1);
        claims.put("roles", List.of("USER"));

        String subject = "test access token"; // 제목
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.MINUTE, 10); // accessToken 만료기간 10분
        Date expiration = calendar.getTime(); // 만료기간 설정

        String accessToken = jwtTokenizer.generateAccessToken(claims,subject,expiration,base64EncodedSecretKey);

        System.out.println(accessToken);

        assertThat(accessToken, notNullValue());
    }

    @Test
    public void generateRefreshToken(){

        String subject = "test refresh Token";
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.HOUR, 24); // refreshToken 만료기간 10분
        Date expiration = calendar.getTime(); // 만료기간 설정

        String refreshToken = jwtTokenizer.generateRefreshToken(subject,expiration,base64EncodedSecretKey);

        System.out.println(refreshToken);

        assertThat(refreshToken, notNullValue());
    }

    // jws

    @DisplayName("jws 증명 예외 발생 X")
    @Test
    public void verifySignatureTest(){
        String accessToken = getAccessToken(Calendar.MINUTE,10);

        assertDoesNotThrow(() -> jwtTokenizer.verifySignature(accessToken,base64EncodedSecretKey));
    }

    @DisplayName("jws 증명 예외 발생 O")
    @Test
    public void verifyExpirationTest() throws InterruptedException {
        String accessToken = getAccessToken(Calendar.SECOND,1);

        TimeUnit.MILLISECONDS.sleep(1500);
        assertThrows(ExpiredJwtException.class,() -> jwtTokenizer.verifySignature(accessToken,base64EncodedSecretKey));
    }

    private String getAccessToken(int timeUnit,int timeAmount){
        Map<String,Object> claims = new HashMap<>();
        claims.put("memberId", 1);
        claims.put("roles", List.of("USER"));

        String subject = "test access token";
        Calendar calendar = Calendar.getInstance();
        calendar.add(timeUnit, timeAmount);
        Date expiration = calendar.getTime();
        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        return accessToken;
    }
}
