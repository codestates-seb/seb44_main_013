//package com.portfolly.server.member.security.oauth2_jwt.handler;
//
//import com.portfolly.server.member.entity.Member;
//import com.portfolly.server.member.security.oauth2_jwt.jwt.JwtTokenizer;
//import com.portfolly.server.member.security.oauth2_jwt.utils.CustomAuthorityUtils;
//import com.portfolly.server.member.service.MemberService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.oauth2.core.user.OAuth2User;
//import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
//import org.springframework.util.LinkedMultiValueMap;
//import org.springframework.util.MultiValueMap;
//import org.springframework.web.util.UriComponentsBuilder;
//
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.net.URI;
//import java.util.Date;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//// Oauth 2 인증 성공 -> 호출 Handler
//@RequiredArgsConstructor
//public class Oauth2MemberSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
//    private final JwtTokenizer jwtTokenizer;
//    private final CustomAuthorityUtils authorityUtils;
//    private final MemberService memberService;
//
//    @Override
//    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
//                                        Authentication authentication) throws IOException, ServletException {
//       var oAuth2User = (OAuth2User)authentication.getPrincipal();
//       String email = String.valueOf(oAuth2User.getAttributes().get("email"));
//        List<String> authorities = authorityUtils.createRoles(email);
//
//        saveMember(email);
//        redirect(request,response,email,authorities);
//    }
//
//    private void saveMember(String email){
//        Member member = new Member(email);
//        memberService.createMember(member);
//        // 멤버와 관련된 추가 저장사항 고려..
//    }
//
//    private void redirect(HttpServletRequest request,HttpServletResponse response,String username,List<String> authorities) throws IOException {
//
//        String accessToken = delegateAccessToken(username,authorities);
//        String refreshToken = delegateRefreshToken(username);
//
//        String url = createURI(accessToken,refreshToken).toString();
//        getRedirectStrategy().sendRedirect(request,response,url);
//    }
//
//    private String delegateAccessToken(String username, List<String> authorities){
//        Map<String,Object> claims = new HashMap<>();
//        claims.put("username",username);
//        claims.put("roles",authorities);
//
//        String subject = username;
//        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());
//
//        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
//
//        String accessToken = jwtTokenizer.generateAccessToken(claims,subject,expiration,base64EncodedSecretKey);
//
//        return accessToken;
//    }
//
//    private String delegateRefreshToken(String username){
//        String subject = username;
//        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
//        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
//
//        String refreshToken = jwtTokenizer.generateRefreshToken(subject,expiration,base64EncodedSecretKey);
//
//        return refreshToken;
//    }
//
//    // Access Token 과 RefreshToken 보낼 Uri 설정
//    private URI createURI(String accessToken, String refreshToken){
//        MultiValueMap<String,String> params = new LinkedMultiValueMap<>();
//        params.add("access_Token",accessToken);
//        params.add("refresh_Token",refreshToken);
//
//        return UriComponentsBuilder
//                .newInstance()
//                .scheme("http")
//                .host("localhost")
//                .port(8080) // default 80
//                .path("/oauthAddress")
//                .queryParams(params)
//                .build()
//                .toUri();
//    }
//}
