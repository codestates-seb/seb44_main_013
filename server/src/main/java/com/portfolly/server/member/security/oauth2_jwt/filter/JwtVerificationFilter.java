//package com.portfolly.server.member.security.oauth2_jwt.filter;
//
//import com.portfolly.server.member.security.oauth2_jwt.jwt.JwtTokenizer;
//import com.portfolly.server.member.security.oauth2_jwt.utils.CustomAuthorityUtils;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import io.jsonwebtoken.security.SignatureException;
//import io.jsonwebtoken.ExpiredJwtException;
//import java.util.List;
//import java.util.Map;
//
//@RequiredArgsConstructor
//public class JwtVerificationFilter extends OncePerRequestFilter {
//
//    private final JwtTokenizer jwtTokenizer;
//    private final CustomAuthorityUtils authorityUtils;
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//        try {
//            Map<String, Object> claims = verifyJws(request);
//            setAuthenticationToContext(claims);
//        } catch (SignatureException se) {
//            request.setAttribute("exception", se); // 서명이 유요하지 않은 경우
//        } catch (ExpiredJwtException ee) {
//            request.setAttribute("exception", ee); // 만료된 경우
//        } catch (Exception e) {
//            request.setAttribute("exception", e);
//        }
//
//        filterChain.doFilter(request, response);
//    }
//
//    @Override
//    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
//        String authorization = request.getHeader("Authorization");
//
//        return authorization == null || !authorization.startsWith("Bearer");
//    }
//
//
//    private Map<String,Object> verifyJws(HttpServletRequest request){
//        String jws = request.getHeader("Authorization").replace("Bearer ", "");
//        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
//
//        return jwtTokenizer.getClaims(jws,base64EncodedSecretKey).getBody();
//    }
//
//    // 인증객체 설정
//    private void setAuthenticationToContext(Map<String,Object> claims){
//        String username = (String) claims.get("username");
//        List<GrantedAuthority> authorities = authorityUtils.createAuthorities((List)claims.get("roles"));
//        Authentication authentication = new UsernamePasswordAuthenticationToken(username,null,authorities);
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//    }
//}
