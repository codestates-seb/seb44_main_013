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

        Member member = memberService.createMember(mapper.AuthToMember(auth));
        List<String> authorities = authorityUtils.createRoles(member.getEmail());
        String accessToken = oAuth2MemberSuccessHandler.delegateAccessToken(auth.getEmail(),authorities);
        String refreshToken = oAuth2MemberSuccessHandler.delegateRefreshToken(auth.getEmail());

        member.setRefreshToken(refreshToken);
        memberService.updateMember(member);

        response.addHeader("AccessToken",accessToken);
        response.addHeader("Member_id",member.getId().toString());
        log.info("Member Id : " + member.getId() + " AccessToken : " + accessToken);

        return "Access_Token Ok";
    }

    @GetMapping("/login")
    public ResponseEntity OauthLogin(@RequestHeader("AccessToken") String accessToken,
                                     @RequestHeader("Member-id") long memberId){

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        jwtTokenizer.verifySignature(accessToken,base64EncodedSecretKey); // jws 위변조 검증
        String email = jwtTokenizer.extractEmailFromToken(accessToken,base64EncodedSecretKey); // Access Token 으로 이메일 추출

        Member member = memberService.findByMember(memberId);

        if(member.getEmail().equals(email)){
            return new ResponseEntity(HttpStatus.OK);
        }
        else {
            throw new BusinessLogicException(ExceptionCode.NOT_DEFINED_MEMBER);
        }
    }
}
