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
import io.jsonwebtoken.Jwt;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
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

    // 추가사항
    @PostMapping("/signup")
    public String OauthSignUp(@RequestHeader("Authorization") String googleAccessToken,
                             @Valid @RequestBody MemberDto.Auth auth,
                             HttpServletResponse response) {

        List<String> authorities = authorityUtils.createRoles(auth.getEmail());
        String accessToken = oAuth2MemberSuccessHandler.delegateAccessToken(auth.getEmail(),authorities);
        String refreshToken = oAuth2MemberSuccessHandler.delegateRefreshToken(auth.getEmail());

        Member Authmember = mapper.AuthToMember(auth);
        Authmember.setRefreshToken(refreshToken);

        Member member = memberService.createMember(Authmember);

        response.addHeader("Authorization",accessToken);
        response.addHeader("RefreshToken",refreshToken);
        response.addHeader("id",member.getId().toString());

        return "[회원 가입] : Access_Token Ok";
    }

    // refresh Token 재생성
    @PostMapping("/regeneration/token")
    public String RefreshToken(@RequestHeader("RefreshToken") String refreshToken,
                               HttpServletResponse response){

        verifyJwtOfReturnSecretKey(refreshToken);

        Member member = memberService.findMemberRefreshToken(refreshToken);
        List<String> authorities = authorityUtils.createRoles(member.getEmail());
        String accessToken = oAuth2MemberSuccessHandler.delegateAccessToken(member.getEmail(), authorities);

        response.addHeader("Authorization", accessToken);
        return "[ ** Regeneration ** ] Access Token";
    }

    // 엑세스 토큰이 만료되면 재로그인을 해서 멤버아이디에 대한 Refresh 토큰을 발급 받아 다시 AccessToken을 만들고 전달
    @GetMapping("/login")
    public ResponseEntity OauthLogin(@RequestHeader("Authorization") String accessToken,
                                     @RequestHeader("id") long memberId,
                                     HttpServletResponse response){

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        verifyJwtOfReturnSecretKey(accessToken);

        String email = jwtTokenizer.extractEmailFromToken(accessToken,base64EncodedSecretKey); // Access Token 으로 이메일 추출

        Member member = memberService.findByMember(memberId);

        if(member.getEmail().equals(email)){
            return ResponseEntity.ok("[로그인] : Ok! ");
        }
        else {
            throw new BusinessLogicException(ExceptionCode.NOT_DEFINED_MEMBER);
        }
    }

    private void verifyJwtOfReturnSecretKey(String Token){
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        jwtTokenizer.verifySignature(Token,base64EncodedSecretKey); // jws 위변조 검증

    }


}
