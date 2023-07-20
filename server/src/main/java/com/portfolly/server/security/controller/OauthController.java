package com.portfolly.server.security.controller;

import com.portfolly.server.member.dto.MemberDto;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.member.mapper.MemberMapper;
import com.portfolly.server.member.service.MemberService;
import com.portfolly.server.security.authentication.oauth2.handler.OAuth2MemberSuccessHandler;
import com.portfolly.server.security.authorization.jwt.JwtTokenizer;
import com.portfolly.server.security.authorization.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.*;

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
    private final CustomAuthorityUtils authorityUtils;
    private final OAuth2MemberSuccessHandler oAuth2MemberSuccessHandler;

    // 추가사항
    @PostMapping("/login")
    public String OauthLogin(@RequestHeader("Authorization") String googleAccessToken,
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
}
