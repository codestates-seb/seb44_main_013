package com.portfolly.server.security.authentication.oauth2.handler;

import com.portfolly.server.member.entity.Member;
import com.portfolly.server.member.service.MemberService;
import com.portfolly.server.security.authorization.jwt.JwtTokenizer;
import com.portfolly.server.security.authorization.utils.CustomAuthorityUtils;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
// 로그인 성공 시 작동 됨

@Configuration
public class OAuth2MemberSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final MemberService memberService;
    private Member member;

    public OAuth2MemberSuccessHandler(JwtTokenizer jwtTokenizer,
                                      CustomAuthorityUtils authorityUtils,
                                      MemberService memberService) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
        this.memberService = memberService;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        System.out.println("# Redirect to Frontend");
        var oAuth2User = (OAuth2User)authentication.getPrincipal();
        String email = String.valueOf(oAuth2User.getAttributes().get("email"));
        String name = String.valueOf(oAuth2User.getAttributes().get("name"));
        List<String> authorities = authorityUtils.createRoles(email);

        String refreshToken = delegateRefreshToken(email);

        saveMember(refreshToken,email,name);

        redirect(request, response, email, authorities);
    }

    private void redirect(HttpServletRequest request, HttpServletResponse response, String username, List<String> authorities) throws IOException {
        String accessToken = delegateAccessToken(username, authorities);
//        String refreshToken = delegateRefreshToken(username);

        String uri = createURI(accessToken).toString();
        getRedirectStrategy().sendRedirect(request, response, uri);
    }

    private void saveMember(String refreshToken,String email,String name) {
        member = Member.builder()
                .email(email)
                .name(name)
                .refreshToken(refreshToken)
                .build();

        memberService.createMember(member);
    }

    public String delegateAccessToken(String username, List<String> authorities) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("username", username);
        claims.put("roles", authorities);

        String subject = username;
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        return accessToken;
    }

    public String delegateRefreshToken(String username) {
        String subject = username;
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String refreshToken = jwtTokenizer.generateRefreshToken(subject, expiration, base64EncodedSecretKey);


        return refreshToken;
    }

    //
    private URI createURI(String accessToken) {
        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add("access_token", accessToken);
        // 멤버 id
        // 멤버가 존재하는지 안하는지
//        queryParams.add("refresh_token", refreshToken);

        // 엑세스 토큰을 받을 리타이렉트 주소를 알아야함
        return UriComponentsBuilder
                .newInstance()
                .scheme("http")
                .host("ec2-13-125-77-46.ap-northeast-2.compute.amazonaws.com")
                .port(8080)
                .path("/token")
                .queryParams(queryParams)
                .build()
                .toUri();
    }
}
