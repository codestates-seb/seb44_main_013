package com.portfolly.server.security.controller;

import com.portfolly.server.exception.businessLogicException.BusinessLogicException;
import com.portfolly.server.exception.businessLogicException.ExceptionCode;
import com.portfolly.server.member.dto.MemberDto;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.member.mapper.MemberMapper;
import com.portfolly.server.member.service.MemberService;
import com.portfolly.server.security.authentication.oauth2.handler.OAuth2MemberSuccessHandler;
import com.portfolly.server.security.authorization.jwt.JwtTokenizer;
import com.portfolly.server.security.authorization.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.List;
@Slf4j
@Configuration
@RestController
@RequiredArgsConstructor
@RequestMapping("/oauth")
public class OauthController {

    private final MemberMapper mapper;
    private final MemberService memberService;
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final OAuth2MemberSuccessHandler oAuth2MemberSuccessHandler;

    public String base64EncodedSecretKey(){
        return jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
    }

    // Todo: 회원가입시 Access Token 및 Refresh Token 발급 및 응답헤더로 전달
    @PostMapping("/signup")
    public String OauthSignUp(HttpServletRequest request,
                              @Valid @RequestBody MemberDto.Auth auth,
                              HttpServletResponse response) {

        List<String> authorities = authorityUtils.createRoles(auth.getEmail());
        String accessToken = oAuth2MemberSuccessHandler.delegateAccessToken(auth.getEmail(),authorities);
        String refreshToken = oAuth2MemberSuccessHandler.delegateRefreshToken(auth.getEmail());

        Member Authmember = mapper.AuthToMember(auth);
        Authmember.setRefreshToken(refreshToken);

        Member member = memberService.createMember(Authmember);

        response.addHeader("Authorization","Bearer " + accessToken);
        response.addHeader("RefreshToken","Bearer " + refreshToken);
        response.addHeader("id",member.getId().toString());

        log.info("Access Token & Refresh Token & memberId response ok");

        return "[회원 가입] : Access_Token OK";
    }

    // Todo : 엑세스 토큰 재생성
    @PostMapping("/regeneration/token")
    public String RefreshToken(@RequestHeader("RefreshToken") String token,
                               HttpServletResponse response){

        String refreshToken = verifyBearerAfterReturnToken(token);

        verifyJwtOfReturnSecretKey(refreshToken);

        Member member = memberService.findMemberRefreshToken(refreshToken);
        List<String> authorities = authorityUtils.createRoles(member.getEmail());
        String accessToken = oAuth2MemberSuccessHandler.delegateAccessToken(member.getEmail(), authorities);

        response.addHeader("Authorization", "Bearer " + accessToken);
        log.info("Access Token Regeneration OK");

        return "[ ** Regeneration ** ] Access Token";
    }

    // Todo : 로그인
    @GetMapping("/login")
    public ResponseEntity OauthLogin(@RequestHeader("Authorization") String token,
                                     @RequestHeader("id") long memberId,
                                     HttpServletResponse response){

        String accessToken =  verifyBearerAfterReturnToken(token);

        verifyJwtOfReturnSecretKey(accessToken);

        String email = jwtTokenizer.extractEmailFromToken(accessToken,base64EncodedSecretKey()); // Access Token 으로 이메일 추출
        Member member = memberService.findByMember(memberId);

        if(member.getEmail().equals(email)){
            return ResponseEntity.ok("[로그인] : Ok! ");
        }
        else {
            throw new BusinessLogicException(ExceptionCode.NOT_DEFINED_MEMBER);
        }
    }

    public void verifyJwtOfReturnSecretKey(String token) {

        jwtTokenizer.verifySignature(token, base64EncodedSecretKey());

    }

    // Todo : "Bearer 검증 후 Bearer 제거 토큰 전달
    public String verifyBearerAfterReturnToken(String token){

        if(token == null || !token.startsWith("Bearer")){
            throw new BusinessLogicException(ExceptionCode.NOT_DEFINED_BEARER_TOKEN);
        }

        return token.substring(7);
    }
}
